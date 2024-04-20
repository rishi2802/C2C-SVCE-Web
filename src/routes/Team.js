import React from 'react'
import "./team.css"
import {FaLinkedinIn} from "react-icons/fa"
import { useState } from 'react';


function Team() {
  const [showCurrentCouncil, setShowCurrentCouncil] = useState(true);

  const handleShowCurrentCouncil = () => {
    setShowCurrentCouncil(true);
  };

  const handleShowPreviousCouncil = () => {
    setShowCurrentCouncil(false);
  };
  const council = [
    {
      name:"Adityavignesh",
      designation:"President",
      link:"https://www.linkedin.com/in/adi4502/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Faditya.png?alt=media&token=bee4b550-9aa9-4175-ab63-938b8aa1523f"
    },
    {
      name:"Hakash MP",
      designation:"Vice President",
      link:"https://www.linkedin.com/in/hakash-mp-813129218/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FHakash.jpg?alt=media&token=f02e7e02-648b-49d8-a82d-2ddc4801d21d"
    },
  
    {
      name:"Janani",
      designation:"General Secretary",
      link:"https://www.linkedin.com/in/janani-v-7429a720b/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FJanani.jpg?alt=media&token=0bffd21c-3e9e-4e62-8484-418b33c782fa"
    },
    {
      name:"Lakshmi Sruthi",
      designation:"Secretary",
      link:"https://www.linkedin.com/in/lakshmi-sruthi-k",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Fsruthi.jpg?alt=media&token=d435ea64-e56e-4076-b4c4-c3126495e1e1"
    },
    {
      name:"Diviyamsh",
      designation:"Joint Secretary",
      link:"https://www.linkedin.com/in/divyamsh-b-6a3a97222/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FDivyamsh.jpg?alt=media&token=5dc50879-248b-4626-adb4-18f878423967"
    },
    {
      name:"Meenakshi R",
      designation:"Treasurer",
      link:"https://www.linkedin.com/in/meenakshi-r-65a384200/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Fmeenakshi.jpg?alt=media&token=79f574a9-5dae-4df2-90b3-e8b8d5a25b82"
    },
    {
      name:"Akshaya Murali",
      designation:"Treasurer",
      link:"https://www.linkedin.com/in/akshaya-murali-5b86a0258",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Fakshaya.jpg?alt=media&token=3c15fe24-1eaf-4818-b30e-2a7fb20cde1d"
    },
    {
      name:"Aniruth Vel A P ",
      designation:"Management Lead",
      link:"https://www.linkedin.com/in/aniruth-vel-anand-915533149/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FAniruth.jpg?alt=media&token=875a35ed-69f6-4199-ad90-b332de8f37ac"
    },
    {
      name:"Aathan A",
      designation:"Content Lead",
      link:"https://www.linkedin.com/in/aathan-a-b70565246",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FAATHAN.jpeg?alt=media&token=56948beb-46bd-46d9-bb7c-2a1fa01badc3"
    },
    {
      name:"John Williams",
      designation:"Web Lead",
      link:"https://www.linkedin.com/in/john-williams-m/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FJOHN%20WILLIAMS.jpg?alt=media&token=5401878f-7b84-49a1-9ef8-5ec46a2e0e69"
    },
    {
      name:"Srihari V",
      designation:"Design Lead",
      link:"https://www.linkedin.com/in/srihari-venkateswaran-32b89b1b5/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSrihari.jpeg?alt=media&token=feb9dded-2661-4d07-9952-4d80229cf374"
    },
    
    
    
  ]
  const executive = [
    {
      name:"Danush S",
      designation:"Executive Member",
      link:"https://www.linkedin.com/in/danush-s-cs-64987b244",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FS-danush.jpg?alt=media&token=cafab71e-8a80-422b-bfb9-95d1eae8343d"
    },
    {
      name:"Nandha Kumar S",
      designation:"Executive Member",
      link:"https://www.linkedin.com/in/nandha-kumar-s-9709a423a/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FNANDHA%20KUMAR.jpg?alt=media&token=a1039141-f2fa-4da3-8ddc-2d0edf3eebf7"
    },
    {
      name:"Iyyappan R",
      designation:"Executive Member",
      link:"https://www.linkedin.com/in/iyyappan-surya-3a7b9922b",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FIYYAPPAN.jpg?alt=media&token=b89e6b0b-7cfe-4bba-8e26-7f8f0a63cc55"
    },
    {
      name:"Sanjay Karthik M",
      designation:"Executive Member",
      link:"https://www.linkedin.com/in/sanjay-karthick-m-a55195221",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSANJAY%20KARTHICK.jpg?alt=media&token=63916c0b-ceb6-4a0e-a163-864df9075804"
    },
    {
      name:"Pratheek",
      designation:"Executive Member",
      link:"https://www.linkedin.com/in/pratheek-manimaran-5b7a2a22b",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FPratheek.jpg?alt=media&token=f2c7a5e2-aeca-4f15-a0c0-da4e1d1cd392"
    },
  ]
  const coexecutive = [
    {
      name:"Rahul G",
      designation:"Co Executive Member",
      link:"https://www.linkedin.com/in/rahul-g-9ba993224",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FRahul.jpg?alt=media&token=4ae251d0-100b-4ed7-b6fc-cf2531ba6aca"
    },
    {
      name:"Dharani Narumugai R",
      designation:"Co Executive Member",
      link:"https://www.linkedin.com/in/dharani-narumugai-ramprasath-655b8120b",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FDharani%20narumugai.jpeg?alt=media&token=2a89a310-d05d-4963-8d7d-b075c44f76bf"
    },
    {
      name:"Sakthimurugan M ",
      designation:"Co Executive Member",
      link:"https://www.linkedin.com/in/sakthimurugan-m-755a9624a",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSakthimurugan.jpg?alt=media&token=9ea0c508-08fb-4211-93f1-73e0fc70f44c"
    },
    {
      name:"Narmadha P",
      designation:"Co Executive Member",
      link:"https://www.linkedin.com/in/narmadha-prakash-b4139423a",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FNARMADHA.png?alt=media&token=5ad116b4-a010-4b65-aadc-eee97e00f474"
    },
    {
      name:"Sivarajan R",
      designation:"Co Executive Member",
      link:"https://www.linkedin.com/in/sivarajan-r-49209496/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSivarajan.jpg?alt=media&token=67d858e4-c8c6-4566-b732-c0ab2e79cfd0"
    },
    {
      name:"Santhosh Kumar S",
      designation:"Co Executive Member",
      link:"https://www.linkedin.com/in/santhoshkumar1910",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSANTHOSH%20KUMAR.jpg?alt=media&token=4b1b9952-e95a-4fc7-83b1-386419641378"
    },
  ]
  const content = [
    {
      name:"Aathan A",
      designation:"Content Lead",
      link:"https://www.linkedin.com/in/aathan-a-b70565246",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FAATHAN.jpeg?alt=media&token=56948beb-46bd-46d9-bb7c-2a1fa01badc3"
    },
    {
      name:"Dharani R",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/dharani-r-785a2a23a",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FDHARANI%20R.jpg?alt=media&token=71cbcb90-41c7-4cdc-a7f2-958a2c272c3e"
    },
    {
      name:"Mounika R",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/mounika-rajamanickam-a2504a239",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FMounika.jpg?alt=media&token=676d1ed2-2b43-40e3-b1dd-d40a8014e8f9"
    },
    {
      name:"Dorraju Nikhita",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/nikhita-dorraju-b135b7210",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FDORRAJU%20NIKHITA.jpg?alt=media&token=be110545-e7e7-444d-bcfc-1c4fcdc66524"
    },
    {
      name:"Himanshu Pant",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/himanshu-pant-3084581bb",
      img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/Screenshot%202023-12-14%20190034.png?alt=media&token=9286aac0-9866-444e-84ae-e92a773ee7fb"
    },
    {
      name:"Sai Manushrri S",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/sai-manushrri-067960256",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSAI%20MANUSHRRI.jpeg?alt=media&token=9d3cd4eb-d533-48d8-ac5d-dc9f8343356d"
    },
  ]
  
  const webteam = [
    {
      name:"John Williams",
      designation:"Web Lead",
      link:"https://www.linkedin.com/in/john-williams-m/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FJOHN%20WILLIAMS.jpg?alt=media&token=5401878f-7b84-49a1-9ef8-5ec46a2e0e69"
    },
    {
      name:"Yerragogu Rishitha",
      designation:"Web Team",
      link:"https://www.linkedin.com/in/yerragogu-rishitha-5519a724a",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FRISHITHA.jpg?alt=media&token=8061de8e-bed0-4f3c-87b1-a5d0968f3399"
    },
    {
      name:"Sunandita R",
      designation:"Web Team",
      link:"https://www.linkedin.com/in/sunandita-r-2b0a9424a",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSUNANDITA.JPG?alt=media&token=d6c5f479-b2c4-485b-9046-0c9384d7b275"
    },
    {
      name:"Mythreye S",
      designation:"Web Team",
      link:"https://www.linkedin.com/in/mythreye-s-9862b2239",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FMythreye.jpg?alt=media&token=48c371cc-ecef-44c9-87e3-2207d30bc098"
    },
   {
      name:"Srii Rajeswari P",
      designation:"Web Team",
      link:"https://www.linkedin.com/in/srii-rajeswari-p/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSRII%20RAJESWARI.jpeg?alt=media&token=d2e9583f-f57f-4416-a03e-8bdf0ac90d49"
    },
  ]

  const design = [
    {
      name:"Srihari V",
      designation:"Design Lead",
      link:"https://www.linkedin.com/in/srihari-venkateswaran-32b89b1b5/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSrihari.jpeg?alt=media&token=feb9dded-2661-4d07-9952-4d80229cf374"
    },
    {
      name:"Vinochan K B",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/vinochankb",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Fvinochan.jpg?alt=media&token=48457992-0406-413e-9a8f-7e01e549ab09"
    },
    {
      name:"Shivasubbiah",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/shiva-subbiah-91a253231",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSHIVASUBBIAH.jpg?alt=media&token=5af1ab4d-bd1c-4918-869e-298da71d0d99"
    },
    {
      name:"Shafiya Parveen S",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/shafiya-parveen-914765229",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Fshafiya.jpg?alt=media&token=3f32e43a-2ee9-49ff-a22f-bd9026123561"
    },
    {
      name:"Shravan Venketraman",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/shravan-venketraman-a2218a266",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FShravan.jpeg?alt=media&token=aae7f7e2-03b8-4732-81b1-1fe7180e30f5"
    },
    {
      name:"Bhavan Arimaan T",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/bhavan-arimaan-6391a7253",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FBhavan.jpg?alt=media&token=c6129967-be96-46f9-a4ec-8fc3b725943f"
    },
    {
      name:"Sanjay Raj",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/sanjay-raj-a4b20a24b",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Fsanjayraj.jpg?alt=media&token=9b4671f8-80f7-4806-910f-657dbbd443a3"
    },
    {
      name:"Chanakiya Kshatriya A",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/chanakiya-kshatriya-476035267",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FCHANAKIYA.JPG?alt=media&token=3540e0b8-8415-45a4-b897-1f5a2e0d9d2e"
    },
  ]
  const presentcouncil=[{
    name:"Chanakiya Kshatriya ",
    designation:"President",
    link:"https://www.linkedin.com/in/chanakiya-kshatriya-476035267",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG_20231212_164948.jpg?alt=media&token=51168bf4-c4f2-4783-9f7d-1ad11cb34887"
  },
  
  {
    name:"Bhavan Arimaan ",
    designation:"Vice President",
    link:"https://www.linkedin.com/in/bhavan-arimaan-6391a7253",
    img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FBhavan.jpg?alt=media&token=c6129967-be96-46f9-a4ec-8fc3b725943f"
  },
  {
    name:"Narmadha P",
    designation:"Vice President",
    link:"https://www.linkedin.com/in/narmadha-prakash-b4139423a",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/Narmadha%20P.jpg?alt=media&token=01aab458-6f74-4243-b855-8a6d8b0812e3"

  },
  {
    name:"Gokul Kannappan ",
    designation:"General Secretary",
    link:"https://www.linkedin.com/in/gokul-kannappan-599a5222a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/DSCF1023-1.JPG?alt=media&token=fea6dbac-2432-4037-9b35-824900aa6efd"

  },
  {
    name:"Jaiadhitya K",
    designation:"Joint Secretary",
    link:"https://www.linkedin.com/in/jaiadhitya-k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/Screenshot%202023-12-14%20190327.png?alt=media&token=7e669e40-e811-42ce-bf16-324ed5138acf"

  },
  {
    name:"Shiva Subbiah B",
    designation:"Event Secretary",
    link:"https://www.linkedin.com/in/shivasubbiah-b-91a253231",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/shiva.jpg?alt=media&token=cf4934c6-9708-4b2b-a25a-67000988d9ad"

  },{
    name:"Monigha Rajam K L",
    designation:"Event Secretary",
    link:"https://www.linkedin.com/in/monigha-rajam-076262293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/Monigha%20Rajam.jpg?alt=media&token=37c69e96-f32f-45bb-acae-69fa03283075"

  },
  {
    name:"Ashwin VV",
    designation:"Treasurer",
    link:"https://www.linkedin.com/in/aswin-vv-66094328b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/ashvin%20vv.png?alt=media&token=68f1ce7f-4620-4789-bc55-46cbaafd8e85"

  },
   {
    name:"Sakthimurugan M",
    designation:"Executive Lead",
    link:"https://www.linkedin.com/in/sakthimurugan-m-755a9624a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSakthimurugan.jpg?alt=media&token=9ea0c508-08fb-4211-93f1-73e0fc70f44c"

   },
   {
    name:"Naren Surya S",
    designation:"Content Lead",
    link:"https://www.linkedin.com/in/naren-surya-s-a7a09925a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/naren.jpg?alt=media&token=b9e8912f-38c3-45a0-92f4-a549be298dee"

   },
   
   {
    name:"Yerragogu Rishitha",
    designation:"Web Lead",
    link:"https://www.linkedin.com/in/yerragogu-rishitha-5519a724a",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/rishitha2.jpg?alt=media&token=71817766-95dc-4e61-bc57-de69d071039b"
  },
  {
    name:"Vinochan K B",
    designation:"Design Lead",
    link:"https://www.linkedin.com/in/vinochankb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/vinochan.jpg?alt=media&token=ad061216-e369-4d25-899a-4a2066f26295"
  },
   {
    name:"Vedhavalli S",
    designation:"Tech Lead",
    link:"https://in.linkedin.com/in/vedhavalli-sarkunnan-183a35295",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/vedhavalli.png?alt=media&token=b4c9cf85-42d0-4036-b50a-7c0d3f003648"

   },
   
  {
    name:"Jaya Surya K",
    designation:"Social media Handler",
    link:"https://www.linkedin.com/in/jaya-surya-537b48299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG_20230414_124239_077%20-%20JAYASURYA%20K%20CSE.jpg?alt=media&token=bb780bff-9c4a-4e5e-90e8-43467987e1cf"
  },
]

const presentevent=[
  {
    name:"Jhalak Vashistha",
    designation:"Event Manager",
    link:"https://www.linkedin.com/in/jhalak-vashistha/?originalSubdomain=in",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/Jhalak%20Vashistha.jpg?alt=media&token=c86c5d90-685a-4b46-bade-d667dfd934a7"

   },
   {
    name:"Keerthi Lakshmi P",
    designation:"Event Manager",
    link:"https://www.linkedin.com/in/keerthi-lakshmi-prabakar-723032290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/keerthi%20lakshmi.png?alt=media&token=1b480aa2-3a41-4359-ba2d-f08d87cebdbc"

   },
   {
    name:"Yuvan Raaj C",
    designation:"Event Manager",
    link:"https://www.linkedin.com/in/yuvanraaj-c-cse-023a51297?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGMuwQdLARvGkPF6r630C1A%3D%3D",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/Yuvan%20.jpeg?alt=media&token=ebf95dc9-4610-42c4-80bf-02c9a0d7b35b"

   },

]

  const presentexecutive=[
    {
      name:"Sakthimurugan M",
      designation:"Executive Lead",
      link:"https://www.linkedin.com/in/sakthimurugan-m-755a9624a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSakthimurugan.jpg?alt=media&token=9ea0c508-08fb-4211-93f1-73e0fc70f44c"
  
     },
    {
    name:"Gokul Nambiar",
    designation:"Executive Member",
    link:"https://www.linkedin.com/in/gokul-nambiar-282729234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG_2227%20-%20GOKUL%20NAMBIAR%20R%20CSE.jpeg?alt=media&token=e5ba43b8-df65-4bb1-8266-9e8353de3cb2"
  },
  {
    name:"Santhosh S",
    designation:"Executive Member",
    link:"https://in.linkedin.com/in/santhosh-selvakumaran-601275238",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/1668059254317%20-%20133%20SANTHOSH%20S%20CSE.jpg?alt=media&token=927ef34a-8c33-40e2-8564-9adb18635a2f"
  },
  {
    name:"Yukeshwar",
    designation:"Executive Member",
    link:"https://www.linkedin.com/in/yukeshwar-p-108478247",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG-20231014-WA0036~2%20-%20YUKESHWAR%20P%20CSE.jpg?alt=media&token=1fd8a576-05aa-4ec8-83ac-54f3e96f5f39"
  },
  {
    name:"Michelle Sarah David",
    designation:"Executive Member",
    link:"",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG-20231027-WA0018%20-%20MICHELLE%20SARAH%20DAVID%20AI%26DS.jpg?alt=media&token=89226861-c355-4b7f-89ef-a4596946453a"
  },
  {
    name:"Yuvaraj K",
    designation:"Executive Member",
    link:"https://www.linkedin.com/in/yuvaraj-k-6b380a22b",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/photogrid.photocollagemaker.photoeditor.squarepic_2023750213829%20-%20187%20YUVARAJ%20K%20CSE.png?alt=media&token=1960eb05-eb1a-42ec-b627-0deda122e0a8"
  },
  {
    name:"Kavin Bharathi",
    designation:"Executive Member",
    link:"https://www.linkedin.com/in/kavin-bharathi-836765289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG_20231105_105514%20-%20KAVIN%20BHARATHI%20K%20M%20CSE.jpg?alt=media&token=41b8e3aa-59ae-4510-be86-ce378104acc3"
  },
  {
    name:"Heera",
    designation:"Executive Member",
    link:"http://www.linkedin.com/in/heera-s-985962269",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/Snapchat-892624971%20-%20HEERA%20S%20CSE.jpg?alt=media&token=93307ab2-ab85-4e38-a2db-b2b3478853f3"
  },
  {
    name:"Vishnu Priya",
    designation:"Executive Member",
    link:"https://www.linkedin.com/in/vishnu-priya-k-7958a024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/vishu%20priya.png?alt=media&token=93b02467-0981-4f5c-a819-13d5a8793ed5"
  },
  {
    name:"Veera Manikandan",
    designation:"Executive Member",
    link:"https://www.linkedin.com/in/veera-manikandan-6aa8a825a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG_20231021_175148%20(1)%20-%20VEERA%20MANIKANDAN%20A%20CSE.jpg?alt=media&token=ccdc2b30-af03-4d3d-8414-8f1f80383175"
  },
  {
    name:"Anusiya",
    designation:"Executive Member",
    link:"https://www.linkedin.com/in/anusiya-sivanraj-298031290",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/anusiya.png?alt=media&token=522d6d74-15ec-4a26-babf-6e5374ed6ecf"
  },
]
  const presentcontent=[
    {
      name:"Naren Surya S",
      designation:"Content Lead",
      link:"https://www.linkedin.com/in/sakthimurugan-m-755a9624a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/naren.jpg?alt=media&token=b9e8912f-38c3-45a0-92f4-a549be298dee"
  
     },
    {
    name:"Sarlin Sajil S A",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/sarlin-sajil-s-a-7006b9294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG%20-%20SARLIN%20SAJIL%20S%20A%20CSE.png?alt=media&token=7f21906f-95c5-4b92-bb72-9c51b892a7b0"
    },
    {
      name:"Panbarasan D",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/panbu-panbu-a8a92b242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG_20230209_183211-01-02-01%20-%20PANBARASAN%20D%20CSE.jpeg?alt=media&token=902f6eaf-298b-4f63-a468-714af07d0f82"
    },
    {
      name:"Tarani V",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/tarani-venugopal-a4a122288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG-20231105-WA0002%20-%20TARANI%20V%20CSE.jpg?alt=media&token=3374b9e0-5dd8-4b8d-a7a9-ba102ef8c585"
    },
    {
      name:"G Abbarajith ",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/abbarajith-ganeshbabu-185b5428b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG_20230822_073355%20-%20ABBARAJITH%20G%20CSE.jpg?alt=media&token=4fde759c-3aac-407a-b1a8-108727b62c30"
    },
    {
      name:"Ananyaa P",
      designation:"Content Team",
      link:"http://linkedin.com/in/ananyaa-permalsamy-220a04263",
      img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/Ananyaa%20-%2014%20-%20ANANYAA%20P%20CSE.jpg?alt=media&token=fa4eaa7c-94ee-4dd6-914c-e192c58178d3"
    },
  ]
  const presentwebteam=[
    {
      name:"Yerragogu Rishitha",
      designation:"Web Lead",
      link:"https://www.linkedin.com/in/yerragogu-rishitha-5519a724a",
      img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/rishitha2.jpg?alt=media&token=71817766-95dc-4e61-bc57-de69d071039b"
    },
    {
      name:"Sunandita R",
      designation:"Web Team",
      link:"https://www.linkedin.com/in/sunandita-r-2b0a9424a",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSUNANDITA.JPG?alt=media&token=d6c5f479-b2c4-485b-9046-0c9384d7b275"
    },
    {
      name:"Srii Rajeswari P",
      designation:"Web Team",
      link:"https://www.linkedin.com/in/srii-rajeswari-p/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/d531aec719557b713d8da0d7be7c15e5%20-%20153%20SRII%20RAJESWARI%20P%20CSE.jpg?alt=media&token=c7e98676-8790-4b45-9e18-ef0eb4c25643"
    },
    { 
    name:"Ajay Narayanan K",
    designation:"Web Team",
    link:"https://www.linkedin.com/in/ajay-narayanan-397216236",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/DSC_0583%20-%20AJAY%20NARAYANAN%20K.JPG?alt=media&token=e82c48e3-b4ff-495e-81b9-a4fc7f636e04"
  },
  {
    name:"Balamurugan B",
    designation:"Web Team",
    link:"https://www.linkedin.com/in/balamurugan-b-20ba6522b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG_20231105_081743%20-%20BALAMURUGAN%20B%20CSE.jpg?alt=media&token=09994b28-5052-4b93-bc6e-096f07615d07"
  },
 
  {
    name:"Ashwin V ",
    designation:"Web Team",
    link:"http://www.linkedin.com/in/ashwin-varadharajan",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG_20231105_124007%20-%20ASHWIN%20V%20CSE.jpg?alt=media&token=0443302a-14b6-45e8-b5d3-9b3b761d6aed"
  },

]

const presentdesignteam =[
  {
    name:"Vinochan K B",
    designation:"Design Lead",
    link:"https://www.linkedin.com/in/vinochankb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/vinochan.jpg?alt=media&token=ad061216-e369-4d25-899a-4a2066f26295"
  },
  {
    name:"Akilesh R",
    designation:"Design Team",
    link:"https://www.linkedin.com/in/akilesh-r-44794526b",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG-20231104-WA0014%20-%20AKILESH%20R%20CSE.jpg?alt=media&token=c5ac02ab-bb8b-48fe-af0e-fa02175baa2b"
  },
  {
    name:"Dhev S",
    designation:"Design Team",
    link:"https://www.linkedin.com/in/dhev-selvam-14aa4523a",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/dhev%20s.png?alt=media&token=b2198589-b201-4d17-8ab5-33a23aa91487"
  },
  {
    name:"Monika S",
    designation:"Design Team",
    link:"https://www.linkedin.com/in/monika-s-9a405025b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG_20231105_092429%20-%20MONIKA%20S%20AI%26DS.jpg?alt=media&token=920ec851-05d6-49bc-b49b-39adb5400ed4"
  },
  {
    name:"Sangeetha V",
    designation:"Design Team",
    link:"https://www.linkedin.com/in/sangeetha-v-32662522a",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/IMG_20231105_151957%20-%20SANGEETHA%20V.jpg?alt=media&token=fc3ef124-d090-4a6e-8819-58edfbee85c9"
  },
  {
    name:"Shruthi T",
    designation:"Design Team",
    link:"https://www.linkedin.com/in/shruthi-thiagarajan-29a70425b/?originalSubdomain=in",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/shruti%20t.png?alt=media&token=d5f91a97-af3e-4d04-acfc-d9ab8338913a"
  },
  {
    name:"HarishBala P",
    designation:"Design Team",
    link:"https://www.linkedin.com/in/harishbala-purushothaman-5b5869270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img:"https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/harish%20bala.png?alt=media&token=cf605407-a273-4d88-b539-435265e26ce2"
  },
]
 
  return (
    <div className='team'> 
      <br />
      <div className='but'>
      <button onClick={handleShowPreviousCouncil}>Council 2021 - 23</button>
        <button onClick={handleShowCurrentCouncil}>Current Council</button>
      </div>

      {showCurrentCouncil && (
        <div>

          <br />
      <hr />
      <br></br>
      <br />
          <h2>Core Members</h2>
      <div className="core">
        {presentcouncil.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Executive Members</h2>
      <div className="core">
        {presentexecutive.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Event Management</h2>
      <div className="core">
        {presentevent.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Content Team</h2>
      <div className="core">
        {presentcontent.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Web Team</h2>
      <div className="core">
        {presentwebteam.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Design Team</h2>
      <div className="core">
        {presentdesignteam.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
        </div>
      )}

      {!showCurrentCouncil && (
        <div>
        <br />
      <hr />
      <br></br>
      <br />
          <h2>Core Members</h2>
      <div className="core">
        {council.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Executive Members</h2>
      <div className="core">
        {executive.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Co-Executive Members</h2>
      <div className="core">
        {coexecutive.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Content Team</h2>
      <div className="core">
        {content.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Web Team</h2>
      <div className="core">
        {webteam.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Design Team</h2>
      <div className="core">
        {design.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
        </div>
      )}
      
      
    </div>
    
  )
}

export default Team