const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const _ = require("lodash");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const PORTS = process.env.PORT || 4000;

const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const saltRounds = 10;
dotenv.config();



app.use(cors());
app.use(bodyParser.json());
// mongoose connection
mongoose.connect(
  "mongodb+srv://" +
    process.env["MONGODBCRED"] +
    "@cluster0.phmm3.mongodb.net/admissionPortal",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});
const Schema = mongoose.Schema;
let Users=new Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
    about: {
        type: String
    },
    c1: {
        type: String
    },
    s1: {
        type: Number
    },
    c2: {
        type: String
    },
    s2: {
        type: Number
    },
    c3: {
        type: String
    },
    s3: {
        type: Number
    },
    c4: {
        type: String
    },
    s4: {
        type: Number
    },
    c5: {
        type: String
    },
    s5: {
        type: Number
    },
    c6: {
        type: String
    },
    s6: {
        type: Number
    },
    c7: {
        type: String
    },
    s7: {
        type: Number
    },
    c8: {
        type: String
    },
    s8: {
        type: Number
    },
    c9: {
        type: String
    },
    s9: {
        type: Number
    },
    c10: {
        type: String
    },
    s10: {
        type: Number
    },
    img: {
        type:String
    }

})
var User = mongoose.model('Users', Users);
app.post('/register', function(req,res){
    let newUser=req.body;
    console.log(newUser);
    User.findOne({email:newUser.email},
        function(err,foundEmail){
            if(!err){
                if(foundEmail){
                    res.json({
                        status:false,
                        message:"Already Register"
                    });
                }else{
                    bcrypt.hash(newUser.password,saltRounds,function(err,hash){
                        let makeUser = new User({
                            email:newUser.email,
                            fname:newUser.fname,
                            lname:newUser.lname,
                            password:hash,
                            gender:newUser.gender
                          });
                          makeUser.save();
                    })
                    res.json({
                        status:true,
                        message:"Register Successfully"
                    })
                }
            }
            else {
                res.json({
                    status: false,
                    message: "Error! Please Try Again."
                })
            }
        }
        )
})
app.get('/show',async(req,res)=>{
    try {
        const user=await User.find()
         res.send(user); 
    } catch (err) {
        console.log(err);
    }
   
})
app.post('/login', function(req,res){
    let login=req.body;
    console.log(login);
    User.findOne({email:login.email}, function(err,foundEmail){
        if(!err){
            if(foundEmail){
                bcrypt.compare(login.password,foundEmail.password,function(error,result){
                    if(result){
                        
                        const token = jwt.sign(foundEmail.email, process.env.JWT_SECRET);
                        console.log(token);
                        const {password,...others}=foundEmail._doc;
                        res.json({
                            status:true,
                            messgae:"login",
                            token:token,
                            user:others
                        });
                    }
                    else{
                        res.json({
                            status:false,
                            message:"incorrect"
                        });
                    }
                })
            }
        }
    })
})
app.get('/verifytoken',(req,res)=>{
    console.log(req.headers.token);
  jwt.verify(req.headers.token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
      User.findOne({ email: user }, (err, foundUser) => {
        if (err) {
          console.log(err);
        } else {

            const { password, ...others } = foundUser._doc;
            res.json({ auth: true, user: others });
          }
        
      });
    }
  });
})
app.post('/profile', function(req,res){
    let login=req.body;
    console.log(login);
    User.findOneAndUpdate({email:login.email},{about:login.about} ,function(err){
        if(err){
            console.log(err);
        }
    })
})
app.post('/findcompany',function(req,res){
   
    User.findOne({email:req.body.email},function(err,foundEmail){
        if(!err){
            if(foundEmail){
                console.log(foundEmail);
                res.json(foundEmail);

            }
        }
        else{
            console.log(err);
        }
    })
})
app.post('/company', function(req,res){
    
    
    User.findOneAndUpdate({email:req.body.email},{
       c1:req.body.stocks[0].c1,
       s1:req.body.stocks[0].s1,
       c2:req.body.stocks[1].c2,
       s2:req.body.stocks[1].s2,
       c3:req.body.stocks[2].c3,
       s3:req.body.stocks[2].s3,
       c4:req.body.stocks[3].c4,
       s4:req.body.stocks[3].s4,
       c5:req.body.stocks[4].c5,
       s5:req.body.stocks[4].s5,
       c6:req.body.stocks[5].c6,
       s6:req.body.stocks[5].s6,
       c7:req.body.stocks[6].c7,
       s7:req.body.stocks[6].s7,
       c8:req.body.stocks[7].c8,
       s8:req.body.stocks[7].s8,
       c9:req.body.stocks[8].c9,
       s9:req.body.stocks[8].s9,
       c10:req.body.stocks[9].c10,
       s10:req.body.stocks[9].s10,
       
    } ,function(err){
        if(err){
            console.log(err);
        }
        else{
            User.findOne({email:req.body.email},function(err,foundEmail){
                if(!err){
                    console.log(foundEmail);
                }
            })
            console.log("ok");
            
            res.json({
                status:"true",
                message:"Saved"
            });
        }
    })
})

	app.use(express.static(path.join(__dirname, "build")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "build", "index.html"));
	});


app.listen(PORTS, function () {
  console.log("Server is running on Port: " + PORTS);
});
