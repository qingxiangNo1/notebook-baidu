// export const constantRoute = [
//     {
//         path: '/children',
//         // component:()=> import('../vue-base/s1.vue'),
//         redirect:'/children/s1',
//         name:'Children',
//         children:[
//             {
//                 path:'s1',
//                 component:()=>import('../vue-base/s1.vue'),
//                 name:'S1',
                
//             },
//             {
//                 path:'s2/:username/:id',
//                 component:()=>import('../vue-base/s2.vue'),
//                 name:'S2',
//             },
//             {
//                 path:'s3',
//                 component:()=>import('../vue-base/s3.vue'),
//                 name:'S3',
//             },
//         ]
//     },
//     {
//         path: '/a',
//         component:()=> import('../vue-base/first.vue'),
//         name:'a',
//         children:[
//             {
//                 path: '1',
//                 component:()=> import('../vue-base/1.vue'),
//                 name:'1',
//                 meta:{
//                     name:'wang',
//                     age:20
//                 }
//             },
//             {
//                 path: '2',
//                 component:()=> import('../vue-base/2.vue'),
//                 name:'2',
//                 meta:{
//                     name:'zhang',
//                     age:21
//                 }
//             },
//             {
//                 path: '3',
//                 component:()=> import('../vue-base/3.vue'),
//                 name:'3',
//                 meta:{
//                     name:'liu',
//                     age:22
//                 }
//             },
           
//         ]
//     },
//     {
//       path:'/',
//       component:()=>import('../vue-base/vuePractice.vue'),
//       redirect:'',
//       name:'Root'
//     },
//     {
//         path: '/about',
//         component:()=> import('../vue-base/about.vue')
//     },
//     { path: '/:pathMatch(.*)*', name: 'NotFound', component: ()=>import('../vue-base/404.vue') },

// ]

// {
//     path: '/about/:id',
//     component:()=> import('../vue-base/about1.vue'),
//     redirect:'/about/:id/AboutChildren1',
//     children:[
//         {
//             path:'AboutChildren1',
//             component:()=>import('../vue-base/aboutChildren1.vue')
//         },
//         {
//             path:'AboutChildren2',
//             component:()=>import('../vue-base/aboutChildren2.vue')
//         }
//     ]
// },


export const constantRoute = [  
    {
      path:'/',
      component:()=>import('@/views/layout.vue'),
      redirect:'/addNotebook',
      name:'layout',
      children:[
        {
          path:'/addNotebook',
          component:()=>import('@/views/addNotebook.vue'),
          name:'addNotebook',
        },
        {
          path:'/deleteNotebook',
          component:()=>import('@/views/deleteNotebook.vue'),
          name:'deleteNotebook',
        },
        {
          path:'/updateNotebook',
          component:()=>import('@/views/updateNotebook.vue'),
          name:'updateNotebook',
        },
        {
          path:'/lookNotebook',
          component:()=>import('@/views/lookNotebook.vue'),
          name:'lookNotebook',
        },
        {
          path:'/searchNotebook',
          component:()=>import('@/views/searchNotebook.vue'),
          name:'searchNotebook',
        },
      ]
    },
    // {
    //     path: '/about',
    //     component:()=> import('')
    // },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: ()=>import('@/components/404.vue') },
]