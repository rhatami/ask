export interface Data{
  id:number;
  title:string;
  text:string;
  tags:string;
  bakhshname?:string;
}
// example Data
 export const DataArray:Data[] = [
    {
      id: 1,
      title: "طرح سنا 2",
      text: ` تسهیلات معادل مبلغ سپرده
حداقل نرخ 15 و حداکثر 23 درصد
حداقل مدت سپرده گذاری 2 و حداکثر 10 ماه
حداقل مبلغ تسهیلات 100,000,000 ریال و حداکثر 3,000,000,000 ربال
بازپرداخت اقساطی بین 18 تا 60 ماه
مشتریان حقیقی و حقوقی (جهت پرداخت به پرسنل)`,
bakhshname:"بخشنامه 1-1401/700/125 تاریخ 1401/12/10",
      tags: "سنا ، سنا 2",
    },
    {
      id: 2,
      title: "طرح میثاق حقیقی 2",
      text: `حداقل نرخ 14 و حداکثر 16 درصد
حداقل مدت سپرده گذاری 3 و حداکثر 12 ماه
حداقل مبلغ تسهیلات 80,000,000 ریال و حداکثر 3,000,000,000 ربال
بازپرداخت اقساطی بین 9 تا 36 ماه
مشتریان حقیقی و حقوقی (جهت پرداخت به پرسنل)`,
bakhshname:"بخشنامه 1-1401/700/127 تاریخ 1401/12/10",
      tags: "میثاق حقیقی 2 ، میثاق حقیقی",
    },
    {
      id: 3,
      title: "طرح جاری طلایی 2",
      text: `تسهیلات ارزان قیمت با نرخ پایین
حداقل نرخ 2 و حداکثر 18 درصد
حداقل مدت سپرده گذاری 3 و حداکثر 12 ماه
حداقل مبلغ تسهیلات 60,000,000 ریال و حداکثر 3,000,000,000 ربال
بازپرداخت اقساطی بین 12 تا 36 ماه
مشتریان حقیقی و حقوقی (جهت پرداخت به پرسنل)`,
bakhshname:"بخشنامه 1-1402/700/44 تاریخ 1402/04/21",
      tags: "جاری طلایی ، جاری طلایی 2",
    },
    {
      id: 4,
      title: "طرح سپاس",
      text: `وام قرض الحسنه با نرخ 4 درصد
نرخ 4 درصد
حداقل مدت سپرده گذاری 2 و حداکثر 12 ماه
حداقل مبلغ تسهیلات 100,000,000 ریال و حداکثر 10,000,000,000 ربال
بازپرداخت اقساطی بین 4 تا 36 ماه
مشتریان حقیقی ، صاحبان کسب و کار و حقوقی (جهت پرداخت به پرسنل)`,
bakhshname:"بخشنامه 1-1402/700/79 تاریخ 1402/08/11",
      tags: "قرض الحسنه ، سپاس",
    },
    {
        id:5,
        title:"سپرده بلند مدت یک ساله",
        text:`حداقل مبلغ 100,000,000 ریال
نرخ سپرده 20.5 درصد
پس از 1 ماه برگشت سود ندارد`,
        tags:"سپرده بلند مدت ، سپرده یک ساله"
    },
    {
        id:6,
        title:"سپرده بلند مدت دو ساله",
        text:`حداقل مبلغ 100,000,000 ریال
نرخ سپرده 21.5 درصد
پس از 2 ماه برگشت سود ندارد`,
        tags:"سپرده بلند مدت ، سپرده دو ساله"
    },
    {
        id:7,
        title:"سپرده بلند مدت سه ساله",
        text:`حداقل مبلغ 100,000,000 ریال
نرخ سپرده 22.5 درصد
پس از 3 ماه برگشت سود ندارد`,
        tags:"سپرده بلند مدت ، سپرده سه ساله"
    },
    {
        id:8,
        title:"حواله سحاب",
        text:`سقف انتقال وجه درون شعبه روزانه 150,000,000 ریال
اینترنت بانک و همراه بانک روزانه 100,000,000 ریال
دستگاه خودپرداز روزانه 100,000,000 ریال
پرداخت یار ها روزانه 30,000,000 ریال
کارمزد حداقل 7,200 ریال تا سقف مبلغ 10,000,000 ریال و به ازای هر 10,000,0000 ریال مازاد مبلغ 2,800 ریال اضافه می شود`,
        tags:"کارت به کارت ، سحاب"
    },
    {
        id:9,
        title:"سقف خرید از پایانه فروش و درگاه پرداخت اینترنتی",
        text:`روزانه 1,000,000,000 ریال`,
        tags:"سقف خرید ، پایانه فروش ، POS ، درگاه پرداخت اینترنتی ، IPG"
    },
    {
        id:10,
        title:"حواله ساتنا",
        text:`سقف انتقال وجه درون شعبه روزانه تا سقف مقرر بدون محدودیت
به صورت غیر حضوری از طریق اینترنت بانک یا همراه بانک روزانه 1,000,000,000 ریال
حداقل مبلغ 500,000,000 ریال
کارمزد 2 صدم درصد مبلغ تراکنش تا سقف 280,000 ریال + 20,000 ریال کارمزد عملیات حضوری `,
        tags:"سقف ساتنا ، کارمزد ساتنا"
    },
    {
        id:11,
        title:"حواله پایا",
        text:`سقف انتقال وجه درون شعبه روزانه تا سقف 1,000,000,000 ریال
به صورت غیر حضوری از طریق اینترنت بانک یا همراه بانک روزانه 1,000,000,000 ریال
حداکثر مبلغ 1,000,000,000 ریال
کارمزد 1 صدم درصد مبلغ تراکنش با کف 2,400 ریال و سقف 30,000 ریال + 20,000 ریال کارمزد عملیات حضوری `,
        tags:"سقف پایا ، کارمزد پایا"
    },
    // {
    //     id:0,
    //     title:"",
    //     text:``,
    //     tags:""
    // },
  ];
