/*
* File: app.js
* Author: Kristál Dávid
* Copyright: 2024, Kristál Dávid
* Group: Szoft I/2/N
* Date: 2024-06-04
* Github: https://github.com/kristaldavid/
* Licenc: GNU GPL
*/
class capacity {
    aAxle?: HTMLInputElement | null;
    bAxle?: HTMLInputElement | null;
    capacity?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor(){
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml(){
        this.aAxle = document.querySelector('#aAxle');
        this.bAxle = document.querySelector('#bAxle');
        this.capacity = document.querySelector('#capacity');
        this.calcButton = document.querySelector('#calcButton');
    }

    handleEvent(){
        this.calcButton?.addEventListener("click", () => {
            console.log('működik');
            this.startCalc();    
        });
    }

    startCalc(){
        const aAxle = Number(this.aAxle?.value);
        const bAxle = Number(this.bAxle?.value);
        const capacity = this.calcCapacity(aAxle, bAxle);
        this.capacity!.value = String(capacity);
    }

     
        calcCapacity(aAxle: number, bAxle: number): number {
            const pi = Math.PI;
            const volume = (4 * pi / 3) * Math.pow(aAxle, 2) * bAxle;
            return volume;
        }
    }

new capacity();