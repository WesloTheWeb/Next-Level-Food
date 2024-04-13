'use client';

import { useState, useRef } from "react";
import classes from './ImagePicker.module.scss';

const { button, controls, input, picker } = classes;

interface ImagePickerProps {
    label: string,
    name: string
}

const ImagePicker = ({ label, name }: ImagePickerProps) => {
    const {pickedImage, setPickedImage} = useState()

    const imageInput = useRef<HTMLInputElement>(null)   ;

    const handlePickClick = () => {
        if (imageInput.current) {
            imageInput.current.click();
        };
    };

    return (
        <div className={picker}>
            <label htmlFor={name}>{label}</label>
            <section className={controls}>
                <input
                    className={input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg, image/jpg"
                    name={name}
                    ref={imageInput}
                />
                <button className={button} type="button" onClick={handlePickClick}>
                    Pick an Image
                </button>
            </section>
        </div>
    );
};

export default ImagePicker;