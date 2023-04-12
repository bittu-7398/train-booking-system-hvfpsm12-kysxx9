export class BookTicketResponseModel{
  public type: string;
  public seats: TrainSeatInfoModel[];
}

export class TrainSeatInfoModel {
  public seatNo: number;
  public status: string;
  public category: number;
  public bookedBy: string;
  
  public row: number;
}
