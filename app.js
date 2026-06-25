const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {

res.send(`

<!DOCTYPE html>

<html>

<head>

<title>AWS Attendance Management System</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, Helvetica, sans-serif;
}

body{
background:linear-gradient(135deg,#0f172a,#2563eb);
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

.container{
width:900px;
background:#fff;
border-radius:20px;
padding:40px;
box-shadow:0 20px 40px rgba(0,0,0,0.3);
}

h1{
text-align:center;
color:#2563eb;
margin-bottom:10px;
}

.subtitle{
text-align:center;
color:#555;
margin-bottom:30px;
}

.status{
background:#16a34a;
color:white;
padding:15px;
text-align:center;
font-size:18px;
font-weight:bold;
border-radius:10px;
margin-bottom:30px;
}

.cards{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:20px;
}

.card{
background:#f8fafc;
padding:20px;
border-radius:12px;
text-align:center;
border-left:6px solid #2563eb;
transition:.3s;
}

.card:hover{
transform:translateY(-5px);
}

.card h2{
color:#2563eb;
margin-bottom:10px;
}

.card p{
color:#555;
}

.services{
margin-top:30px;
display:flex;
justify-content:center;
gap:15px;
flex-wrap:wrap;
}

.service{
background:#2563eb;
color:white;
padding:10px 18px;
border-radius:30px;
font-weight:bold;
}

.footer{
margin-top:35px;
text-align:center;
border-top:1px solid #ddd;
padding-top:20px;
color:#555;
}

.footer strong{
color:#2563eb;
}

</style>

</head>

<body>

<div class="container">

<h1>Attendance Management System</h1>

<p class="subtitle">
CI/CD Pipeline Deployment using AWS
</p>

<div class="status">
Application Successfully Deployed
</div>

<div class="cards">

<div class="card">
<h2>Employee Attendance</h2>
<p>Daily attendance tracking enabled.</p>
</div>

<div class="card">
<h2>Leave Management</h2>
<p>Manage leave requests efficiently.</p>
</div>

<div class="card">
<h2>Reports</h2>
<p>Monthly attendance reports available.</p>
</div>

<div class="card">
<h2>Database</h2>
<p>Connected with Amazon RDS.</p>
</div>

</div>

<div class="services">

<div class="service">AWS CodePipeline</div>

<div class="service">AWS CodeBuild</div>

<div class="service">Amazon EC2</div>

<div class="service">Node.js</div>

<div class="service">GitHub</div>

</div>

<div class="footer">

<h3>Capstone Project 11</h3>

<p><strong>Project:</strong> CI/CD Pipeline for Attendance Application</p>

<p><strong>Developed By:</strong> Vishakha Mantalwad</p>

</div>

</div>

</body>

</html>

`);

});

app.listen(PORT,"0.0.0.0",()=>{

console.log(`Attendance Application running on port ${PORT}`);

});