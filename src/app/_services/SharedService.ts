import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    id1: number;
    id2: number;
    departureDate: string;
    returnDate: string;
}