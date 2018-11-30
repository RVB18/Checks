import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-singlechequeprint',
  templateUrl: './singlechequeprint.component.html',
  styleUrls: ['./singlechequeprint.component.css']
})
export class SinglechequeprintComponent implements OnInit, AfterViewInit {

  data:any;

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) { }
  ngAfterViewInit() {
console.log(this.data)
var a=this.data
// this.router.navigate(['/vendorcheckdetails',a.Name]);

    }
  ngOnInit() {
    this.route.params.subscribe(params => {
       this.data = JSON.parse(params['data']); // (+) converts string 'id' to a number
console.log(this.data)
       // In a real app: dispatch action to load the details here.

       var num=this.data.Dollar+"";
       if(num.includes(".")){
       var dot=num .split(".")
       var doting=""
       if(dot[1].length==1)
       doting=dot[1]+"0"
       else
       doting=dot[1]
       var nu=convertNumberToWords(parseInt(dot[0]))+" and "+doting+"/100*****"
       var astreik="";
       var g1=5-dot[0].length

       while(g1>0){

       astreik+="*"


       g1--;
       }
       window.open('http://alektasolutions.com/purchase/print/cheque/ang?date='+this.data.Date+'&name='+this.data.Name+'&amount='+astreik+this.data.Dollar+'&addr=,,')

       }
       else{

         var g1=5-num.length
         console.log("astreik "+g1)

         var astreik=""
         while(g1>0){

         astreik+="*"


         g1--;
         }
         console.log("astreik "+g1)
         window.open('http://alektasolutions.com/purchase/print/cheque/ang?date='+this.data.Date+'&name='+this.data.Name+'&amount='+astreik+this.data.Dollar+'&addr=,,')
       }
    });
    var a=this.data
    this.http.get('http://13.232.165.2:3000/statusupdate?chequeid='+a.chequeid).subscribe(data => {
          //console.log(data);
        //  this.data=data;
          console.log(data);

        });
        window.print()

  }

}
