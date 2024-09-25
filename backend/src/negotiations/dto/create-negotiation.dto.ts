export class CreateNegotiationDto {
    status: string;
    discount: number;
    fkClient?: number;
    fkProductList?: number;
}
