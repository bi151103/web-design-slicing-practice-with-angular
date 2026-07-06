import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-list',
  imports: [SvgIconComponent],
  template: `
    <ng-container>
      <div
        class="bg-white w-[70%] max-h-[70%] min-h-[300px] rounded-[24px]  px-[40px] py-[40px] overflow-auto"
      >
        <ng-container>
          <div class="flex w-full">
            <div
              class="flex w-[200px] items-center h-[50px] border border-gray-600 px-[10px] rounded-[8px]"
            >
              <svg-icon
                src="assets/svg-icons/search.svg"
                class="basis-[24px]"
              />
              <input
                placeholder="Search"
                class="ml-[10px] w-[calc(100%-34px)] outline-none"
              />
            </div>
            <div class="ml-auto flex basis-[110px] gap-[10px]">
              <div class="flex justify-center items-center w-[50px]">
                <svg-icon src="assets/svg-icons/bell.svg"></svg-icon>
              </div>
              <div
                class="bg-[#eaebff] w-[50px] h-[50px] rounded-full flex justify-center items-center"
              >
                PD
              </div>
            </div>
          </div>
        </ng-container>
        <ng-container>
          <div class="p"></div>
          <h1 class="font-bold text-3xl my-[20px]">Accounts</h1>
          <ul>
            @for (acc of accountsList; track acc.appName) {
              <li
                class="hover:bg-[#eaebff] hover:cursor-pointer p-[15px] h-[100px] "
              >
                <a
                  [href]="acc.appSite"
                  class="flex items-center rounded-[16px] h-full w-full"
                  target="_blank"
                >
                  <img
                    [src]="acc.appThumbSrc"
                    class="w-[50px] aspect-square rounded-full"
                  />
                  <div class="ml-[15px] w-[120px]">
                    <p class="text-2xl font-bold">{{ acc.appName }}</p>
                    <p>{{ acc.appSite.substring(12) }}</p>
                  </div>
                  <div class="ml-[40px] font-medium">
                    {{ acc.noOfAccs }}
                    {{ acc.noOfAccs === 1 ? 'account' : 'accounts' }}
                  </div>
                  <button
                    class="ml-auto w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center hover:cursor-pointer"
                  >
                    <svg-icon src="assets/svg-icons/dot-horizontal-menu.svg">
                    </svg-icon>
                  </button>
                </a>
              </li>
            }
          </ul>
        </ng-container>
      </div>
    </ng-container>
  `,
  host: {
    class: 'block flex h-full w-full justify-center items-center',
  },
})
export default class ListComponent {
  accountsList = [
    {
      appName: 'Dropbox',
      appSite: 'https://www.dropbox.com',
      noOfAccs: 24,
      appThumbSrc: 'assets/images/dropbox.png',
    },
    {
      appName: 'Pinterest',
      appSite: 'https://www.pinterest.com',
      noOfAccs: 3,
      appThumbSrc: 'assets/images/pinterest.png',
    },
    {
      appName: 'Microsoft',
      appSite: 'https://www.microsoft.com',
      noOfAccs: 3,
      appThumbSrc: 'assets/images/microsoft.png',
    },
  ];
}
