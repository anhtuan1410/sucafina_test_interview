import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HostListener } from '@angular/core';
const id_Div= 'div-need-scroll';
const id_Infomation = 'section-infomation';
const id_MenuItem = 'section-menu-item';
@Component({
  selector: 'app-infomations',
  templateUrl: './infomation.component.html',
  styleUrls: ['./infomation.component.scss']
})
export class InfomationsComponent {
  indexPage: number = 1;
  infomationFormGroup: FormGroup;

  dataSource: Observable<any[]> = new Observable<any[]>(r => r.next([]));
  hasData: Observable<boolean> = new Observable<boolean>(r => r.next(false));;

  _dataSample: any[] = [
    {
      MenuItemID: 12,
      MenuItemCode: "A334",
      MenuItemName: "Thực phẩm",
      Description: "Thực phẩm đông lạnh"
    },
    {
      MenuItemID: 14,
      MenuItemCode: "A335",
      MenuItemName: "Thiết bị điện tử",
      Description: "máy tính, mạch.."
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    this.dataSource.subscribe(p => {
      debugger
      if (!p)
        this.hasData = new Observable(_k => _k.next(false));
      else
      {  
        let _chk = p.length > 0;
        this.hasData = new Observable(_k => _k.next(_chk));
      }

    });
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      debugger
      if (params['indexPage']) {
        const id = +params['indexPage'];
        this.indexPage = id;
        var _k = document.getElementById(id_Div);
        switch(this.indexPage)
        {
          case 1:           
            _k.scrollTo(0, 0);
            break;
          case 2:
            var _dicIn = document.getElementById(id_MenuItem);
            console.log(_dicIn.offsetTop);
            _k.scrollTo(0, _dicIn.offsetTop);
            break;
        }

        console.log('Url Id: ', this.indexPage);
      }
    })
    this.initInfomationForm();
    this.setUpMenuItem();
    this.setUpScroll();
  }

  initInfomationForm() {
    this.infomationFormGroup = this._formBuilder.group({
      menuCode: [''],
      menuName: [''],
      description: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  setUpMenuItem() {
    
    this.dataSource = new Observable(r => r.next([]));
    this.hasData = new Observable(r => r.next(false));

  }

  AddItem() {
    debugger
    this.dataSource = new Observable(r => r.next(this._dataSample));
  }

  hasDataChecked(){
    this.dataSource.subscribe(p => {
      debugger
      if (!p)
        return false;
      else
      {  
        let _chk = p.length > 0;
        return _chk;
      }

    });
  }


  setUpScroll(){
    
    var t = document.getElementById(id_Div);
    t.addEventListener('scroll',
    function()
    {
        var scrollTop = document.getElementById(id_Div).scrollTop;
        var scrollHeight = document.getElementById(id_Div).scrollHeight; // added
        var offsetHeight = document.getElementById(id_Div).offsetHeight;
        // var clientHeight = document.getElementById('box').clientHeight;
        var contentHeight = scrollHeight - offsetHeight; // added
        if (contentHeight <= scrollTop) // modified
        {
            // Now this is called when scroll end!
        }
        console.log("Scool :D")
    },
    false);

  }

  heightSpace(){
    try
    {
      var t = document.getElementById(id_Infomation);
      return "width: 100%; height: "+t.clientHeight+"px;"
    }
    catch{

    }
  }
  

}
