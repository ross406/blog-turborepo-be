import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(()=> String)
  name: string;

  @Field(()=> String)
  password: string;

  @Field(()=> String)
  @IsEmail()
  email:string;

  @Field({nullable:true})
  bio?:string;

  @Field({nullable:true})
  avatar?:string;
}
