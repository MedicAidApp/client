export const Patients = () => {
  return (
    <section class="py-8">
      <div class="container px-4 mx-auto">
        <div class="pt-4 bg-white shadow rounded">
          <div class="flex px-6 pb-4 border-b">
            <h3 class="text-xl font-bold">Patients</h3>
          </div>
          <div class="p-4">
            <table class="table-auto w-full">
              <thead>
                <tr class="text-xs text-gray-500 text-left">
                  <th class="pb-3 font-medium">ID</th>
                  <th class="pb-3 font-medium">Date</th>
                  <th class="pb-3 font-medium">E-mail</th>
                  <th class="pb-3 font-medium">Name</th>
                  <th class="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-xs bg-gray-50">
                  <td class="py-5 px-6 font-medium">SR2451EW32</td>
                  <td class="font-medium">08.10.2021</td>
                  <td class="font-medium">lukecage@midu.dev</td>
                  <td class="font-medium">Luke Cage</td>
                  <td>
                    <span class="inline-block py-1 px-2 text-white bg-green-500 rounded-full">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr class="text-xs">
                  <td class="py-5 px-6 font-medium">SR2451EW32</td>
                  <td class="font-medium">08.04.2021</td>
                  <td class="font-medium">bader@alsaffar.rich</td>
                  <td class="font-medium">Bader</td>
                  <td>
                    <span class="inline-block py-1 px-2 text-white bg-red-500 rounded-full">
                      Canceled
                    </span>
                  </td>
                </tr>
                <tr class="text-xs bg-gray-50">
                  <td class="py-5 px-6 font-medium">SR2451EW32</td>
                  <td class="font-medium">08.04.2021</td>
                  <td class="font-medium">LMAO@rafa.wtf</td>
                  <td class="font-medium">LMAO</td>
                  <td>
                    <span class="inline-block py-1 px-2 text-white bg-orange-500 rounded-full">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr class="text-xs">
                  <td class="py-5 px-6 font-medium">SR2451EW32</td>
                  <td class="font-medium">08.04.2021</td>
                  <td class="font-medium">sebas@ponce.dev</td>
                  <td class="font-medium">Sebastian</td>
                  <td>
                    <span class="inline-block py-1 px-2 text-white bg-green-500 rounded-full">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr class="text-xs bg-gray-50">
                  <td class="py-5 px-6 font-medium">SR2451EW32</td>
                  <td class="font-medium">08.04.2021</td>
                  <td class="font-medium">juan@juan.com</td>
                  <td class="font-medium">Juan Lomborgui</td>
                  <td>
                    <span class="inline-block py-1 px-2 text-white bg-green-500 rounded-full">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
