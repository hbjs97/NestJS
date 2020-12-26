import {
    PartialType
} from '@nestjs/mapped-types';

import {
    CreateMovieDTO
} from './create-movie.dto';

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) { }


// import {
//     IsNumber,
//     IsString
// } from 'class-validator';
// export class UpdateMovieDTO {

//     @IsString()
//     readonly title?: string;
//     @IsNumber()
//     readonly year?: number;
//     @IsString({ each: true })
//     readonly genres?: string[];
// }