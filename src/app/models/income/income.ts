export class Income {
  id: string;
  incomeGroupId: number;
  incomeNameGroupId: string;
  amount: number;
  date: string;
}

export class IncomeRequest {
  userId: number;
  incomeGroupId: number;
  amount: number;
  date: string;
}


