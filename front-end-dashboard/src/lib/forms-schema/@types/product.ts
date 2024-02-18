import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { ProductSchema } from '../product';

export interface InputsProductProps {
  register: UseFormRegister<ProductSchema>;
  errors: FieldErrors<ProductSchema>;
}
