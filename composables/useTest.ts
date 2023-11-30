import { getInfo } from '@/service';

export async function useTest() {
  const instance = getCurrentInstance();
  await getInfo();

  console.log('== useTest ==', getCurrentInstance());

  //   onMounted(() => {
  //     console.log('== useTest onMounted ==');
  //     console.log(instance);
  //   });
}
