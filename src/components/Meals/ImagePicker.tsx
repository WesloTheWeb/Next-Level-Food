'use client';

import { useState, useRef } from "react";
import Image from "next/image";
import classes from './ImagePicker.module.scss';

const { button, controls, input, picker } = classes;

interface ImagePickerProps {
    label: string,
    name: string
};

const ImagePicker = ({ label, name }: ImagePickerProps) => {
    const [pickedImage, setPickedImage] = useState<string | null>(null);
    const imageInput = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null; 
        if (!file) {
            setPickedImage(null);
            return;
        };

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result as string); 
            // cast to string because readAsDataURL returns a string
        };

        fileReader.readAsDataURL(file);
    };

    const handlePickClick = () => {
        if (imageInput.current) {
            imageInput.current.click();
        };
    };

    return (
        <div className={picker}>
            <label htmlFor={name}>{label}</label>
            <section className={controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage && (
                        <Image
                            src={pickedImage}
                            alt="The image selected by the user."
                            fill
                        />
                    )}
                </div>
                <input
                    className={input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg, image/jpg"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button className={button} type="button" onClick={handlePickClick}>
                    Pick an Image
                </button>
            </section>
        </div>
    );
};

export default ImagePicker;