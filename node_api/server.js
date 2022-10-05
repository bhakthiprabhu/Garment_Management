var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
  
  
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'garment_management'
});
  
// connect to database
dbConn.connect(); 
//login validation
app.post("/login",function(req,res)
{
    let username = req.body.username;
    let password = req.body.password;
    if(!username)
    {
        return res.status(400).send({error:true,message:"Please input username and password"});
    }

    dbConn.query(`select name,username from user where username="${username}" and password="${password}"`
    , function (error, results, fields)
        {
           // console.log("result length: "+results.length);
           // console.log("error "+error);
            if(error)
            {
                return res.send({error:true,data:results,message:error});
            }
            if(!results.length || results.length==0)
            {  
                console.log("user not found");
                return res.send({error:true,data:[],message:"user not found!"});
            }
            if (results.length) {
                console.log("user found");
                return res.send({error:false,data:[],message:"success"});
            }
            //console.log(results);
            //console.log(fields);
            
        });
    //console.log(results);
});

app.get("/vendorList",function(req,res)
{
    dbConn.query(`select * from vendor`, function (error, results, fields)
        {
            //console.log(results);
            return res.send({error:false,data:results,message:"success"});
        });
});

app.get("/listDistribute",function(req,res)
{
    dbConn.query(`select * from assigned_to`, function (error, results, fields)
        {
            //console.log(results);
            return res.send({error:false,data:results,message:"success"});
        });
});

app.get("/catalogList",function(req,res)
{
    dbConn.query(`select * from catalog`, function (error, results, fields)
        {
            //console.log(results);
            return res.send({error:false,data:results,message:"success"});
        });
});

app.get("/ListRawMaterial",function(req,res)
{
    dbConn.query(`select * from raw_material`, function (error, results, fields)
        {
            //console.log(results);
            return res.send({error:false,data:results,message:"success"});
        });
});

app.get("/ProductList",function(req,res)
{
    dbConn.query(`select * from product`, function (error, results, fields)
        {
            //console.log(results);
            return res.send({error:false,data:results,message:"success"});
        });
});

app.post("/editProduct",function(req,res)
{
    //console.log(req);
    let pid = req.body.pid;
    let name = req.body.name;
    let description = req.body.description;
    let size = req.body.size;
    dbConn.query(`update product set name='${name}',description='${description}',size='${size}' where pid=${pid}`, function (error, results, fields)
        {
            if(error)
            {
                return res.send({error:true,data:results,message:error});
            }
            return res.send({error:false,data:results,message:"success"});
        });
});

app.post("/editVendor",function(req,res)
{
    //console.log(req);
    let vid = req.body.vid;
    let name = req.body.name;
    let phone = req.body.phone;
    let address = req.body.address;
    dbConn.query(`update vendor set name='${name}',phone='${phone}',address='${address}' where vid='${vid}';`, function (error, results, fields)
        {
            if(error)
            {
                return res.send({error:true,data:results,message:error});
            }
            return res.send({error:false,data:results,message:"success"});
        });
});

app.post("/editRawMaterial",function(req,res)
{
    //console.log(req);
    let rid = req.body.rid;
    let name = req.body.name;
    let type = req.body.rtype;
    let size = req.body.size;
    let quantity = req.body.quantity;
    let available = req.body.available;
    dbConn.query(`update raw_material set name='${name}',type='${type}',size='${size}',quantity='${quantity}',available='${available}' where rid='${rid}';`, function (error, results, fields)
        {
            if(error)
            {
                return res.send({error:true,data:results,message:error});
            }
            return res.send({error:false,data:results,message:"success"});
        });
});

app.post("/editDistribute",function(req,res)
{
    //console.log(req);
    var datetime = new Date();
    let date = datetime.toISOString().slice(0,10);
    let status = req.body.status;
    let quantity = req.body.quantity;
    let damage = req.body.damage;
    let assignedid =req.body.assignid;
    dbConn.query(`update assigned_to set date='${date}',status='${status}',quantity='${quantity}',damage='${damage}' where assignid='${assignedid}';`, function (error, results, fields)
        {
            if(error)
            {
                return res.send({error:true,data:results,message:error});
            }
            return res.send({error:false,data:results,message:"success"});
        });
});

app.post("/editEmployee",function(req,res)
{
    //console.log(req);
    let contact = req.body.contact;
    let name = req.body.name;
    let address = req.body.address;
    let role = req.body.role;
    let wid = req.body.eid;
    dbConn.query(`UPDATE employee SET name='${name}',contact='${contact}',address='${address}',role='${role}' WHERE wid='${wid}'`, function (error, results, fields)
        {
            if(error)
            {
                return res.send({error:true,data:results,message:error});
            }
            return res.send({error:false,data:results,message:"success"});
        });
});

app.post("/deleteProduct",function(req,res)
{
    let pid = req.body.pid;
    //console.log(vid);
    dbConn.query(`delete from product where pid="${pid}"`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });
});  

app.post("/deleteVendor",function(req,res)
{
    let vid = req.body.vid;
    //console.log(vid);
    dbConn.query(`delete from vendor where vid="${vid}"`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });
});

app.post("/deleteDistribute",function(req,res)
{
    let did = req.body.assignid;
    //console.log(vid);
    dbConn.query(`delete from assigned_to where assignid="${did}"`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });
});

app.post("/deleteRawMaterial",function(req,res)
{
    let rid = req.body.rid;
    //console.log(vid);
    dbConn.query(`delete from raw_material where rid="${rid}"`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });
});

app.post("/deleteEmployee",function(req,res)
{
    let wid = req.body.eid;
    //console.log(vid);
    dbConn.query(`delete from employee where wid='${wid}'`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });
});

app.post("/addProduct",function(req,res)
{
    let name = req.body.name;
    let description = req.body.description;
    let size = req.body.size;
    dbConn.query(`insert into product (name,description,size) values('${name}','${description}','${size}')`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });

});

app.post("/addVendor",function(req,res)
{
    let name = req.body.name;
    let phone = req.body.phone;
    let address = req.body.address;
    dbConn.query(`insert into vendor (admin_id,name,phone,address) values(0,'${name}','${phone}','${address}')`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });

});

app.post("/addEmployee",function(req,res)
{
    let name = req.body.name;
    let phone = req.body.contact;
    let address = req.body.address;
    let role = req.body.role;
    dbConn.query(`INSERT INTO employee(name, contact, address, role) VALUES ('${name}','${phone}','${address}','${role}')`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });

});

app.get("/employeeList",function(req,res)
{
    dbConn.query(`select * from employee`, function (error, results, fields)
        {
            //console.log(results);
            return res.send({error:false,data:results,message:"success"});
        });
});

app.post("/addDistribute",function(req,res)
{
    var datetime = new Date();
    let date = datetime.toISOString().slice(0,10);
    let status = req.body.status;
    let quantity = req.body.quantity;
    let damage = req.body.damage;
    dbConn.query(`insert into assigned_to (date,status,quantity,damage) values('${date}','${status}','${quantity}','${damage}')`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });

});

app.post("/addCatalog",function(req,res)
{
    let catalogname = req.body.catalogname;
    let catalogtype = req.body.catalogtype;
    let catalogsize = req.body.catalogsize;
    let uploadfile = req.body.uploadfile;
    var datetime = new Date();
    let date = datetime.toISOString().slice(0,10);
    
    dbConn.query(`insert into catalog (date,name,type,size,imgurl) values('${date}','${catalogname}','${catalogtype}','${catalogsize}','${uploadfile}')`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });

});

app.post("/addRawMaterial",function(req,res)
{
    let type = req.body.type;
    let name = req.body.name;
    let quantity = req.body.quantity;
    let size = req.body.size;
    let available = req.body.available;
    dbConn.query(`insert into raw_material (type,name,size,quantity,available) values('${type}','${name}','${size}','${quantity}','${available}')`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });

});
app.get("/getvid",function(req,res)
{
    dbConn.query(`select vid,name as vname from vendor`,function(error,results)
    {
        return res.send({error:false,data:results,message:"success"});
    });
});
app.get("/getpid",function(req,res)
{
    dbConn.query(`select pid,name as pname from product`,function(error,results)
    {
        return res.send({error:false,data:results,message:"success"});
    });
});
app.get("/getoid",function(req,res)
{
    dbConn.query(`select a.oid,a.wid,p.name as pname,v.name as vname,e.name as ename from product p, vendor v, employee e, assigned_to a, order_request o where v.vid=o.vid and p.pid=o.pid and o.oid=a.oid and e.wid=a.wid;
    `,function(error,results)
    {
        return res.send({error:false,data:results,message:"success"});
    });
});
app.get("/getcid",function(req,res)
{
    dbConn.query(`select id as cid,name as cname from catalog`,function(error,results)
    {
        return res.send({error:false,data:results,message:"success"});
    });
});
app.get("/orderList",function(req,res)
{
    dbConn.query(`select o.vid,o.cid,o.pid,o.oid,o.date,o.quantity,o.damage,p.name as pname,v.name vname,c.name as cname
    from order_request o,catalog c,product p,vendor v
    where o.pid=p.pid and o.vid=v.vid and c.id=o.cid`, function (error, results, fields)
        {
            //console.log(results);
            return res.send({error:false,data:results,message:"success"});
        });
});
app.post("/addOrder",function(req,res)
{
    let pid = req.body.productName;
    let vid = req.body.vendorName;
    var datetime = new Date();
    let date = datetime.toISOString().slice(0,10);
    let quantity = req.body.quantity;
    let damage = req.body.damage;
    let cid = req.body.catalogName;
    dbConn.query(`INSERT INTO order_request(pid, vid, date, quantity, damage, cid) VALUES ('${pid}','${vid}','${date}','${quantity}','${damage}','${cid}')`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });

});
app.post("/editOrder",function(req,res)
{
    let pid = req.body.pid;
    let vid = req.body.vid;
    var datetime = new Date();
    let date = datetime.toISOString().slice(0,10);
    let quantity = req.body.qty;
    let damage = req.body.damage;
    let cid = req.body.cid;
    let oid = req.body.oid;    
   // console.log(pid+" "+oid);

    dbConn.query(`UPDATE order_request SET pid='${pid}',vid='${vid}',date='${date}',quantity='${quantity}',damage='${damage}',cid='${cid}' WHERE  oid='${oid}'`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });

});
app.post("/deleteOrder",function(req,res)
{
    let oid = req.body.oid;
    //console.log(vid);
    dbConn.query(`delete from order_request where oid="${oid}"`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });
});

app.post("/deleteCatalog",function(req,res)
{
    let id = req.body.id;
    dbConn.query(`delete from catalog where id="${id}"`,function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });
});

app.get("/getDashboardProduct",function(req,res)
{
    dbConn.query('select sum(o.quantity) as quantity,p.name as pname from order_request o,product p where o.pid=p.pid group by p.name',function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });
});
app.get("/getDashboardProductNames",function(req,res)
{
    dbConn.query('select name from product',function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });
});
app.get("/getDashboardEmployeeCount",function(req,res)
{
    dbConn.query('select count(*) as ecount from employee',function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });
});
app.get("/getDashboardVendorCount",function(req,res)
{
    dbConn.query('select count(*) as vcount from vendor',function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });
});
app.get("/getDashboardSoldCount",function(req,res)
{
    dbConn.query('select count(*) as scount from sold',function(error,results)
    {
        if(error)
        {
            return res.send({error:true,data:results,message:error});
        }
        return res.send({error:false,data:results,message:"success"});
    });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
