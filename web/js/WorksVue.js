const {createApp,ref}  = Vue;

createApp({
    data(){
        return{
            Works:[

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