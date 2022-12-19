export enum TStatusFlight {
  IN = 'IN',
  OUT = 'OUT',
}

export interface IItemFlightInformation {
  id: string;
  status: TStatusFlight;
  priority: string;
  originator: string;
  recipients: string;
  text: string;
  receivedDate: string;
  receivedTime: string;
}

export interface IItemFlightInformationFromAPI {
  id: string;
  status: TStatusFlight;
  priority: string;
  originator: string;
  recipients: string[];
  text: string;
  receivedDate: string;
  receivedTime: string;
}
