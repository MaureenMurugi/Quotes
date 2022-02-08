import { Component, Input, OnInit, } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote-service/quote.service';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input()
  quote! : Quote;
  // quote: Quote;
  

  constructor() { }

  ngOnInit(): void {
  }

}


