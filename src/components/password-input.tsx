'use client';
import React from 'react';
import { Input, InputProps } from '@heroui/react';
import { Eye, EyeClosed } from 'lucide-react';

export default function PasswordInput(props: InputProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      className="w-full"
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-solid outline-transparent"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <Eye className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeClosed className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
      {...props}
    />
  );
}
