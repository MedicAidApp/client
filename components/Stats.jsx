export const Stats = () => {
  return (
    <section class="py-8">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="w-full lg:w-1/2 p-4">
            <div class="p-6 mb-8 bg-white shadow rounded">
              <div class="flex mb-3 items-center justify-between">
                <h3 class="text-gray-500">Patients for today</h3>
                <button class="focus:outline-none">
                  <svg
                    class="h-4 w-4 text-gray-200"
                    viewbox="0 0 16 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0.333344C7.67037 0.333344 7.34813 0.431092 7.07405 0.614228C6.79997 0.797363 6.58635 1.05766 6.4602 1.36221C6.33406 1.66675 6.30105 2.00186 6.36536 2.32516C6.42967 2.64846 6.5884 2.94543 6.82149 3.17852C7.05458 3.41161 7.35155 3.57034 7.67485 3.63465C7.99815 3.69896 8.33326 3.66596 8.63781 3.53981C8.94235 3.41366 9.20265 3.20004 9.38578 2.92596C9.56892 2.65188 9.66667 2.32965 9.66667 2.00001C9.66667 1.55798 9.49107 1.13406 9.17851 0.821499C8.86595 0.508939 8.44203 0.333344 8 0.333344ZM2.16667 0.333344C1.83703 0.333344 1.5148 0.431092 1.24072 0.614228C0.966635 0.797363 0.753014 1.05766 0.626868 1.36221C0.500722 1.66675 0.467717 2.00186 0.532025 2.32516C0.596334 2.64846 0.755068 2.94543 0.988156 3.17852C1.22124 3.41161 1.51822 3.57034 1.84152 3.63465C2.16482 3.69896 2.49993 3.66596 2.80447 3.53981C3.10902 3.41366 3.36931 3.20004 3.55245 2.92596C3.73559 2.65188 3.83333 2.32965 3.83333 2.00001C3.83333 1.55798 3.65774 1.13406 3.34518 0.821499C3.03262 0.508939 2.6087 0.333344 2.16667 0.333344ZM13.8333 0.333344C13.5037 0.333344 13.1815 0.431092 12.9074 0.614228C12.6333 0.797363 12.4197 1.05766 12.2935 1.36221C12.1674 1.66675 12.1344 2.00186 12.1987 2.32516C12.263 2.64846 12.4217 2.94543 12.6548 3.17852C12.8879 3.41161 13.1849 3.57034 13.5082 3.63465C13.8315 3.69896 14.1666 3.66596 14.4711 3.53981C14.7757 3.41366 15.036 3.20004 15.2191 2.92596C15.4023 2.65188 15.5 2.32965 15.5 2.00001C15.5 1.55798 15.3244 1.13406 15.0118 0.821499C14.6993 0.508939 14.2754 0.333344 13.8333 0.333344Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex items-center mb-3">
                <span class="text-4xl font-bold">32</span>
                <span class="inline-block ml-2 py-1 px-2 bg-green-500 text-white text-xs rounded-full">
                  +6.9%
                </span>
              </div>
              <div class="relative w-full h-1 mb-2 bg-gray-50 rounded">
                <div class="absolute top-0 left-0 w-4/6 h-full bg-purple-500 rounded"></div>
              </div>
              <p class="text-xs text-gray-200">Todays appointments</p>
            </div>
            <div class="p-6 bg-white shadow rounded">
              <div class="flex mb-3 items-center justify-between">
                <h3 class="text-gray-500">Check-ups completed</h3>
                <button class="focus:outline-none">
                  <svg
                    class="h-4 w-4 text-gray-200"
                    viewbox="0 0 16 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0.333344C7.67037 0.333344 7.34813 0.431092 7.07405 0.614228C6.79997 0.797363 6.58635 1.05766 6.4602 1.36221C6.33406 1.66675 6.30105 2.00186 6.36536 2.32516C6.42967 2.64846 6.5884 2.94543 6.82149 3.17852C7.05458 3.41161 7.35155 3.57034 7.67485 3.63465C7.99815 3.69896 8.33326 3.66596 8.63781 3.53981C8.94235 3.41366 9.20265 3.20004 9.38578 2.92596C9.56892 2.65188 9.66667 2.32965 9.66667 2.00001C9.66667 1.55798 9.49107 1.13406 9.17851 0.821499C8.86595 0.508939 8.44203 0.333344 8 0.333344ZM2.16667 0.333344C1.83703 0.333344 1.5148 0.431092 1.24072 0.614228C0.966635 0.797363 0.753014 1.05766 0.626868 1.36221C0.500722 1.66675 0.467717 2.00186 0.532025 2.32516C0.596334 2.64846 0.755068 2.94543 0.988156 3.17852C1.22124 3.41161 1.51822 3.57034 1.84152 3.63465C2.16482 3.69896 2.49993 3.66596 2.80447 3.53981C3.10902 3.41366 3.36931 3.20004 3.55245 2.92596C3.73559 2.65188 3.83333 2.32965 3.83333 2.00001C3.83333 1.55798 3.65774 1.13406 3.34518 0.821499C3.03262 0.508939 2.6087 0.333344 2.16667 0.333344ZM13.8333 0.333344C13.5037 0.333344 13.1815 0.431092 12.9074 0.614228C12.6333 0.797363 12.4197 1.05766 12.2935 1.36221C12.1674 1.66675 12.1344 2.00186 12.1987 2.32516C12.263 2.64846 12.4217 2.94543 12.6548 3.17852C12.8879 3.41161 13.1849 3.57034 13.5082 3.63465C13.8315 3.69896 14.1666 3.66596 14.4711 3.53981C14.7757 3.41366 15.036 3.20004 15.2191 2.92596C15.4023 2.65188 15.5 2.32965 15.5 2.00001C15.5 1.55798 15.3244 1.13406 15.0118 0.821499C14.6993 0.508939 14.2754 0.333344 13.8333 0.333344Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex items-center mb-3">
                <span class="text-4xl font-bold">94.2%</span>
              </div>
              <div class="chart" data-type="columns-stacked"></div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-4">
            <div class="bg-white rounded">
              <div class="flex items-center py-5 px-6 border-b">
                <h3 class="text-2xl font-bold">Balance</h3>
              </div>
              <div class="pt-4 px-6">
                <div class="flex flex-wrap -m-4 pb-16">
                  <div class="w-full md:w-1/2 p-4">
                    <div class="py-4 px-6 border rounded">
                      <h4 class="text-xs text-gray-500">Earnings</h4>
                      <div class="flex items-center">
                        <span class="mr-2 text-3xl font-bold">43.41%</span>
                        <span class="py-1 px-2 bg-green-500 text-xs text-white rounded-full">
                          +2.5%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 p-4">
                    <div class="py-4 px-6 border rounded">
                      <h4 class="text-xs text-gray-500">Anual Value</h4>
                      <div class="flex items-center">
                        <span class="mr-2 text-3xl font-bold">$95,422</span>
                        <span class="py-1 px-2 bg-green-500 text-xs text-white rounded-full">
                          +13.5%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chart" data-type="area"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
