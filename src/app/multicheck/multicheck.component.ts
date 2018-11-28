import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-multicheck',
  templateUrl: './multicheck.component.html',
  styleUrls: ['./multicheck.component.css']
})
export class MulticheckComponent implements OnInit {

  data:any;
  m:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.m=[{
      name:"hkk"
    }]
    this.route.params.subscribe(params => {
      var name = params['data']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
       //console.log(name);
       this.data=JSON.parse(name);
console.log(this.data)

    });


  }

}
