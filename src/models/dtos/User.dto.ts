import {IsNotEmpty, IsPositive} from "class-validator";

/**
 * User DTOs
 *
 * @author Yepeng Ding
 */
export class CreateUserBody {
    @IsNotEmpty()
    public firstname: string;

    @IsNotEmpty()
    public lastname: string;

    @IsPositive()
    public age: number;
}
