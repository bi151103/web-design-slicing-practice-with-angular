import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-subscription-section',
  template: `<ng-container>
    <div
      class="bg-[#f4f5fa] w-[70%] max-h-[80%] overflow-auto text-center p-[40px]"
    >
      <h1 class="text-3xl font-bold px-[80px] py-[20px]">
        Get the most out of your mobile with the right subscription
      </h1>
      <p class="text-2xl font-medium px-[50px] py-[20px]">
        All devices come with free delivery or pickup as standard. See
        information on available shopping options for your location.
      </p>
      <ul class="flex gap-[40px] mt-[40px]">
        @for (sub of subsList; track sub.name) {
          <li
            [class]="
              (subsList.length === 3
                ? 'w-[calc((100%-80px)/3)] '
                : subsList.length === 2
                  ? 'w-[calc((100%-40px)/2)] '
                  : 'w-full ') +
              ' h-[400px] bg-white rounded-2xl shadow-[-10px_-10px] p-[20px] text-left flex flex-col justify-center ' +
              sub.shadowColor
            "
          >
            <img [src]="sub.logoSrc" class="w-[50px] aspect-square" />
            <p class="text-2xl font-bold py-[5px]">{{ sub.title }}</p>
            <p class="text-xl font-medium py-[5px]">{{ sub.description }}</p>
            <p class="text-3xl font-bold py-[10px]">
              {{ sub.pricePerMonth }},-
              <span class="text-xl font-medium">/month</span>
            </p>
            <button
              class="font-medium rounded-4xl shadow-[0_10px] shadow-[#e7e7fb] bg-[#f4f5fa] px-[20px] py-[15px] mt-[40px] leading-[14px] cursor-pointer hover:text-white hover:bg-black"
            >
              Add subscription
            </button>
          </li>
        }
      </ul>
      <button
        class="font-medium rounded-4xl bg-[#e7e7fb] px-[20px] py-[15px] mt-[40px] leading-[14px] cursor-pointer hover:text-white hover:bg-black"
      >
        See all subscriptions
      </button>
    </div>
  </ng-container>`,
  host: {
    class: 'block w-dvw h-dvh bg-[#f0f0f6] flex items-center justify-center',
  },
})
export default class BuySubscriptionSectionComponent {
  subsList = [
    {
      name: 'ice',
      title: 'Ice mobile 10g',
      description: 'Up to 10',
      pricePerMonth: 299,
      logoSrc: 'assets/images/1x1_design_logo.png',
      shadowColor: 'shadow-yellow-200',
    },
    {
      name: 'ice',
      title: 'Ice mobile 10g',
      description: 'Up to 10',
      pricePerMonth: 299,
      logoSrc: 'assets/images/1x1_design_logo.png',
      shadowColor: 'shadow-pink-200',
    },
    {
      name: 'ice',
      title: 'Ice mobile 10g',
      description: 'Up to 10',
      pricePerMonth: 299,
      logoSrc: 'assets/images/1x1_design_logo.png',
      shadowColor: 'shadow-blue-200',
    },
  ];
}
