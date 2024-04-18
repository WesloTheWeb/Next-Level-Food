'use server';

import { saveMeal } from "./meals";

interface FormDataProps {
    formData: FormData;
};

export async function shareMeal({ formData }: FormDataProps) {
    const file = formData.get('imageFieldName') as File; // Use the correct field name for your file input


    const meal = {
        title: formData.get('title') as string, // Cast to string, assuming these fields are always strings
        summary: formData.get('summary') as string,
        instructions: formData.get('instructions') as string,
        // image: formData.get('image') as string, // This will not work if image is a file, you need to handle file separately
        image: file,
        creator: formData.get('creator') as string, 
        creator_email: formData.get('creator_email') as string
    };

    await saveMeal(meal);
};
