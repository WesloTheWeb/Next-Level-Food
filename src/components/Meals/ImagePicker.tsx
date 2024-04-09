import React from "react";
import classes from './ImagePicker.module.scss';

const { } = classes;

interface ImagePickerProps {
    label: string,
    name: string
}

const ImagePicker = ({ label, name }: ImagePickerProps) => {

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <section className={classes.controls}>
                <input
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg, image/jpg"
                    name={name}
                />
            </section>
        </div>
    );
};

export default ImagePicker;