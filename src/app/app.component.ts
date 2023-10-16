import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h3>App Component</h3>

  <ng-container>

  Burası ng container içeriğidir.
  Açıklama, client tarafındaki kodu incelersek aşağıdaki gibi bir uygulamada available false olan nesneler içinde span dönmüş ve açıklama notu bırakmıştır. Bu client tarafına göstermek istemediğimiz bir durumdur. Bunun için ng-container kullanacağız. Bu şekilde tarayıcı kısmını daha az yoracğaı için maliyet ve performans artısı olacaktır...

  </ng-container>
<h1> Burada ng containter kullanmadan yapıyoruz..Dikkat ederseniz 6 tane span var. yani false nesneler içinde span oluşturulmuş..</h1>
  <ul>
    <span *ngFor ="let product of products">
      <li *ngIf="product.available">{{product.productName}}</li>
    </span>
  </ul>
<h1> Burada ng-container kullanarak yapıyoruz. Dikkat ederseniz 4 tane li oluşturulmuş çünkü false olanları burada göstermiyor ng-container..</h1>
  <ul>
    <ng-container *ngFor ="let product of products">
      <li *ngIf="product.available">{{product.productName}}</li>
    </ng-container>
  </ul>
  `,
})
export class AppComponent {
  products : any[] = [
    {productName: "Pencil", available:true},
    {productName: "Notebook", available:true},
    {productName: "Duster", available:false},
    {productName: "Book", available:true},
    {productName: "Table", available:false},
    {productName: "Bin", available:true}
  ]
}
