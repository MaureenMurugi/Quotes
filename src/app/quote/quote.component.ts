import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote-service/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [QuoteService]
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote( 'I lie down and sleep; I wake again, because the Lord sustains me.', 'Psalms3:5',0,0,'Maureen Murugi', new Date(2021,2,12),false),
    new Quote( 'And the words of the Lord are flawless, like silver refined in a furnace of clay, purified seven times', 'Psalms12:6',0,0,'MBernice Adhiambo', new Date(2021,1,13),false),
    new Quote( 'Surely God is my salvation, I will trust and not be afraid', 'Isaiah12:2',0,0,'Keziah Mbatha', new Date(2021,2,14),false),
    new Quote( 'If you do not get it forget about it ', 'Random',0,0,'Maurice Njoroge', new Date(2021,2,11),false),

  ];

  getQuotes(){
    return this.quotes;
  }
   addQuote(quote:any){
     quote.quote  = quote.quote;
     quote.author  = quote.author;
     quote.upvotes = 1;
     quote.downvotes  = 0;
     quote.submitted_by  = quote.submitted_by;
     quote.created_at  = new Date(quote.created_at);
     quote.isFavorite  = false;
     this.quotes.unshift(quote);

  }

  
  toggleQuoteDetails(quote:any, show:boolean) {
    this.getQuotes().indexOf(quote) >=0 ? this.getQuotes()[this.getQuotes().indexOf(quote)].showQuoteDetails = show: this.getQuotes()[this.getQuotes().indexOf(quote)].showQuoteDetails = false;

  }

  voteQuote(quote:any, type:number) {
    if(this.getQuotes().indexOf(quote) >=0) {
      type === 0 ? this.getQuotes()[this.getQuotes().indexOf(quote)].upvotes++ :this.getQuotes()[this.getQuotes().indexOf(quote)].downvotes++;
      this.rankQuotes();
    }
  }

  rankQuotes(): void{
    let upvoted: number   = Math.max.apply(Math,this.getQuotes().map(function(chosen){return chosen.upvotes;}));
    if( upvoted > 0){
        let upvotedQuote: any = this.getQuotes().find(function(selected){ return selected.upvotes == upvoted; });
        let favIndex: number  = this.getQuotes().indexOf(upvotedQuote);
        this.getQuotes().map((quote)=>{
            if(favIndex === this.getQuotes().indexOf(quote)){
                this.quotes[favIndex].isFavorite = true;
            }else{
                quote.isFavorite = false;
            }
        });
    }
}

deleteQuote(quote:any){
    if(this.getQuotes().indexOf(quote)>= 0){
        let toDelete = confirm(`Are you sure you want to delete the quote: ${this.quotes[this.quotes.indexOf(quote)].quote}?`)
        if(toDelete){
            this.getQuotes().splice(this.getQuotes().indexOf(quote),1);
        }
    }
    this.rankQuotes();
}

addNewQuote(quote:any) {
  this.quotes.push(quote)
}
toggleDetails (quote:boolean) {
  this.quotes.push()
}
  constructor() {
    
   }
  ngOnInit(): void {
   

  }
}


//   constructor() { }

//   ngOnInit(): void {
//     // this.quotes = this.quoteService.getQuotes();
//   }
//   addNewQuote(quote:any){
//     // this.quoteService.addQuote(this.quotes);
//   }

//   voteQuote(quote:any,type:number){
//     // this.quoteService.voteQuote(quote,type);
//   }

//   toggleDetails(quote:any, show:boolean){
//     // this.quoteService.toggleQuoteDetails(quote,show);
//   }
//   deleteQuote(quote:any){
//     // this.quoteService.deleteQuote(quote);
//   }

// }
