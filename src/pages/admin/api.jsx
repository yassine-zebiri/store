import { API } from "../../redux/API";


export async function get_prod(){
    return await API.post('/index.php',{
        TOKEN:"produicts"
    })
}
export async function get_rows(){
    
    return await API.post('/index.php',{
        TOKEN:"rows"
    })
}
export async function Add_row_Api(name,type,classes){
    return await API.post('/admin.php',{
        TOKEN:"ADD_ROW",
        name:name,
        type:type,
        classes:classes

    })
}

export async function ADD_Product_API(Date){
    const formdata=new FormData();
    formdata.append("TOKEN", "ADD_produict");
    formdata.append("img",Date.containedButtonFile);
    formdata.append("title", Date.name);
    formdata.append("categorie", Date.categorie);
    formdata.append("buyingPrice", Date.buyingPrice);
    formdata.append("sallingPrice",Date.sallingPrice);
    formdata.append("storeHouse", Date.stroeHouse);
    formdata.append("descripiton",Date.descripiton);
    return await API.post('/admin/admin.php',formdata,{
    headers:{
        "Content-Type": "multipart/form-data",
    }})
}

///////////////////////////////////////////// Gategories ////////////////////////////////////////

export async function get_categories_API(){
    return await API.post('/index.php',{
        TOKEN:"categories"
    })
}

export async function Add_Gategorie_Api(value){
    const formdata=new FormData();
    formdata.append('TOKEN',"ADD_CATEGORIE");
    formdata.append("value",value);
    return await API.post('/admin/admin.php',formdata,{
        headers:{
            "Accept": "*/*",
        }
    })
}
export async function Remove_Gategorie_Api(index){
    const formdata=new FormData();
    formdata.append('TOKEN',"REMOVE_CATEGORIE");
    formdata.append("index",index);
    return await API.post('/admin/admin.php',formdata,{
        headers:{
            "Accept": "*/*",
        }
    })
}

export async function Set_Case_Categorie_API(DATA){
    const formdata=new FormData();
    formdata.append('TOKEN',"SET_CASE_CATEGORIE");
    formdata.append("ID", DATA.ID);
    formdata.append("value",DATA.VALUE);
    return await API.post('/admin/admin.php',formdata,{
        headers:{
            "Accept": "*/*",
        }
    })
}



///////////////////////// products/////////////////////////////////////////////////////////////////////////


export async function Set_Case_Product(DATA){
    const formdata = new FormData();
    formdata.append("TOKEN", "SET_CASE_PRODUCT");
    formdata.append("id", DATA.ID);
    formdata.append("value",DATA.VALUE);
    return await API.post('/admin/admin.php',formdata,{
        headers:{
            "Accept": "*/*"
        }
    })
}


export async function Remove_Products_API(id){
    const formdata = new FormData();
    formdata.append("TOKEN", "REMOVE_PRODUCT");
    formdata.append("ID",id);
    return await API.post('/admin/admin.php',formdata,{
        headers:{
            "Accept": "*/*"
        }
    })
}



export async function ADD_Salider_Pic_API(DATA){
    const formdata=new FormData();
    formdata.append("TOKEN", "ADD_Salider_Pic");
    formdata.append("saliderPic",DATA.containedButtonFile);
    formdata.append("categorie",DATA.categorie);
    formdata.append("categorieSub",DATA.categorieSub);

    return await API.post('/admin/admin.php',formdata,{
    headers:{
        "Content-Type": "multipart/form-data",
    }})
}

/////////////// ROWS //////////////////////////

export async function Get_Rows_Api(){
    const formdata=new FormData();
    formdata.append("TOKEN","rows");
    return await API.post('/index.php',formdata);
}