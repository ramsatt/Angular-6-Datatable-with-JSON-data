import {Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
import {Subject, Observable} from "rxjs";
declare var $;
@Directive({
  selector: '[appDataTable]'
})
export class DataTableDirective implements OnInit, OnDestroy{
  private dataTable: any;
  @Input() dtOptions:any = {};
  constructor(private el: ElementRef) { }

  ngOnInit(): void  {
    this.displayTable();
  }

  ngOnDestroy(): void {
  }

  private displayTable(): void {
    setTimeout(()=>{
      this.dataTable = $(this.el.nativeElement);
      if(this.dtOptions){
        this.dataTable.DataTable(this.dtOptions);
      } else {
        this.dataTable.DataTable();
      }
    });

  }
}
