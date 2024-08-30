"use client"

import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"
import { useEffect, useState } from "react"

export const Caroussel = ({ Photos }) => {
    const [TotalPhotos, setTotalPhotos] = useState(0);
    const [initialPhoto, setInitialPhoto] = useState('');
    const [position, setPosition] = useState(0);

    useEffect(() => {
        if (Photos) {
            setTotalPhotos(Photos.length);
            setInitialPhoto(Photos[position]);
        }
    }, [Photos, position]); // Update the photo whenever position or Photos changes

    const previous = () => {
        if (position > 0) {
            setPosition(position - 1);
        }
    }

    const after = () => {
        if (position < TotalPhotos - 1) { // Use TotalPhotos - 1 for correct index limit
            setPosition(position + 1);
        }
    }

    return (
        <div style={{ position: 'relative', width: '600px', height: '300px' }}>
            <Image
                width={600}
                height={300}
                src={`/Rooms/RoomsPhotos/${initialPhoto}.png`}
                alt="Room Image"
                className="object-cover opacity-[95%] transition-opacity duration-500 ease-in-out"
            />
            <Button
                onClick={previous}
                isIconOnly
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    padding: '4px',
                    zIndex: 10
                }}
            >
                <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                    />
                </svg>
            </Button>

            <Button
                onClick={after}
                isIconOnly
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    padding: '4px',
                    zIndex: 10
                }}
            >
                <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                </svg>
            </Button>
        </div>
    )
}
