var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/index_list/1/data/1', function(req, res, next) {
  res.send({
    code:0,
    data:{
      tabBar:[
        {id:1,label:'东南'},
        {id:2,label:'大学'},
        {id:3,label:'东南'},
        {id:4,label:'东南'},
        {id:5,label:'东南'},
        {id:6,label:'东南'},
      ],
      data:[
        {
          id:0,
          type:'swiperList',
          data:[
            {
              id:1,
              imgUrl:"./images/swiper1.jpg"
            },
            {
                id:2,
                imgUrl:"./images/swiper2.jpg"
            },
            {
                id:3,
                imgUrl:"./images/swiper3.jpg"
            },
            {
                id:4,
                imgUrl:"./images/swiper4.jpg"
            },
          ]
        },
        {
          id:1,
          type:'iconList',
          data:[
            {
                id:1,
                title:'四牌楼',
                imgUrl:'./images/icons1.jpg',
            },
            {
                id:2,
                title:'九龙湖',
                imgUrl:'./images/icons2.jpg',
            },
            {
                id:3,
                title:'丁家桥',
                imgUrl:'./images/icons3.jpg',
            },
            {
                id:4,
                title:'六朝松',
                imgUrl:'./images/icons4.jpg',
            },
            {
                id:5,
                title:'1902',
                imgUrl:'./images/1902.jpg',
            }
          ]
        },
        {
          id:2,
          type:'recommandList',
          data:[
            {
                id:1,
                imgUrl:'./images/jianzhu.jpg',
                title:'吴健雄学院',
                description:'当今世界正处于激荡变局之中，文明和信仰的冲突、地区平衡被打破、气候环境的变化以及疾速迭代的技术变革，使得我们身处的时空充满不确定性。在这样的时代，建筑类学科能否一如既往，在这个碎片化的世界里重新树立起清晰的结构和持久的价值？东南大学建筑学院和薪火相传的东南学人愿意为此贡献自己的智慧与力量。',
                score:'1000',
            },
            {
                id:2,
                imgUrl:'./images/jianzhu.jpg',
                title:'建筑学院',
                description:'东南大学建筑学院是中国现代建筑教育最具学科完整意义的起始地。自1927年建系以来持续引领国内建筑教育的发展，在国际上产生着越来越重要的影响。九十多年来，从这个建筑英才的摇篮走出了十一位中国科学院和中国工程院院士以及十一位全国工程勘察设计大师，培养了八千余名建筑、规划和风景园林领域的杰出人才，为我国城乡建设发展做出了杰出贡献。',
                score:'2000',
            },
            {
                id:3,
                imgUrl:'./images/jianzhu.jpg',
                title:'交通学院',
                description:'目前学院拥有国内建筑类院校最为完整的学科架构和雄厚的师资力量，并与国际一流建筑院校保持紧密的学术交流与教学科研合作，形成了具有鲜明东南特色的学术品格和“严谨、博雅、求实、创新”的学院文化。',
                score:'3000',
            },
          ]
        },
      ]
    }

  });
});


module.exports = router;
