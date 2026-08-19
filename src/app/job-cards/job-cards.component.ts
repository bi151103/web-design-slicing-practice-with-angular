import { Component } from '@angular/core';

@Component({
  selector: 'app-job-cards',
  template: `
    <ng-container>
      <div class="w-[70%] max-h-[70%] p-[30px] text-center">
        <h1 class="text-3xl font-bold py-[30px]">Open positions</h1>
        <ul class="flex gap-[15px] flex-wrap py-[30px]">
          @for (position of positionList; track position.name) {
            <li
              class="w-[calc((100%-15px*2)/3)] bg-white rounded-2xl h-[150px] shadow-2xl flex flex-col justify-center gap-[10px] items-center"
            >
              <div class="flex gap-[10px] justify-center items-center">
                <img [src]="position.thumbSrc" class="w-[50px] aspect-square" />
                <h2 class="font-medium text-[20px]">{{ position.name }}</h2>
              </div>
              <button
                class="font-medium hover:bg-black hover:text-white w-[80%] border border-[1px] rounded-[4px] py-[5px] hover:cursor-pointer"
              >
                {{ position.headCount }} open
                {{ position.headCount === 1 ? 'position' : 'positions' }}
              </button>
            </li>
          }
        </ul>
      </div>
    </ng-container>
  `,
  host: {
    class: 'block w-dvw h-dvh flex justify-center items-center',
  },
})
export default class JobCardsComponent {
  positionList = [
    {
      name: 'Design',
      headCount: 4,
      thumbSrc: 'assets/images/1x1_design_logo.png',
    },
    {
      name: 'Engineering',
      headCount: 8,
      thumbSrc: 'assets/images/1x1_design_logo.png',
    },
    {
      name: 'Opearations',
      headCount: 2,
      thumbSrc: 'assets/images/1x1_design_logo.png',
    },
    {
      name: 'People',
      headCount: 6,
      thumbSrc: 'assets/images/1x1_design_logo.png',
    },
    {
      name: 'Sales',
      headCount: 7,
      thumbSrc: 'assets/images/1x1_design_logo.png',
    },
    {
      name: 'University',
      headCount: 8,
      thumbSrc: 'assets/images/1x1_design_logo.png',
    },
  ];
}
