const {createApp,ref}  = Vue;

createApp({
    data(){
        return{
            Works:[
                { text: "Shusta", photo: "images/5.png" },
                { text: "Isagi", photo: "images/6.png" },
                { text: "Ayru", photo: "images/7.jpeg" },
                { text: "Mysta", photo: "images/8.PNG" },
                { text: "とーる", photo: "images/9.png" },
                { text: "Mysta", photo: "images/10.PNG" }
            ]
        };
    },
    mounted(){
        fetch("/ptofoiloWorks-data")
            .then((response)=>{
                if(response.ok){
                    throw new Error('HTTP error! status: ${response.status}');
            }
            return response.json();
        })
        .then((data)=>{
            console.log("Received data: ", data); //檢查回傳的資料
            this.WorksDB = data; //將資料傳給WoorksDB
        })
        .catch((error)=>{
            console.error('Error:', error);
        });
    }
}).mounted('.profolioWorks-data');