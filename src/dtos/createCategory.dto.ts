import { IsNotEmpty, IsUrl, Length } from 'class-validator';
// pour activer la configuration de decorator, aller dans Ts-config.json et ajouter "experimentalDecorators": true

export class createCategoryDto {
  @IsNotEmpty()
  @Length(3, 140)
  name!: string;

  @IsNotEmpty()
  @IsUrl()
  image!: string;
}
