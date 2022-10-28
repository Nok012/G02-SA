import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";



function HomeAdmin() {
  return (
    <div>
      <h3>เข้าระบบทุนการศึกษาในฐานะผู้ดูแลระบบ</h3>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper>    
       <Box
          display="flex"
          sx={{
            marginTop: 2,
          }}
        >
          <Box sx={{ paddingX: 4 }}>        
               <h3>Requirements</h3>         
          </Box>
        </Box>
        <Divider />
        <Box sx={{ paddingX: 4, paddingY: 5.6 }}>          
            <p>
            ระบบทุนการศึกษา เป็นระบบที่ผู้ใช้ระบบเป็นสมาชิกสามารถ login เข้าระบบเพื่อดูข้อมูลที่เกี่ยวกับทุนการศึกษาแต่ละประเภท 
            โดยนักศึกษาสามารถเข้ามาเลือกทุนที่ต้องการและยื่นคำร้องขอทุนเข้ามา เพื่อรับการคัดเลือกทุนการศึกษาตามเงื่อนไขทุนแต่ละประเภท 
            ทางระบบจะทำการคัดเลือกนักศึกษาที่ได้รับทุน แล้วทำการโอนเงินให้นักศึกษาที่ได้รับทุน โดยจะมีการเก็บหลักฐานการโอนเงินไว้ภายในระบบ 
            รวมทั้งยังมีข้อมูลของผู้บริจาคทุนการศึกษาแต่ละทุนอีกด้วย
            </p>  
            <p>
            โดยระบบคัดเลือกนักศึกษา เป็นระบบที่ผู้ดูแลระบบจะกรองเอาคำร้องของนักศึกษามาพิจารณาแล้วคัดเลือกนักศึกษาที่มีคุณสมบัติตรงตามทุนการศึกษาแต่ละทุนตามที่ผู้ให้ทุนต้องการ
             แล้วมาบันทึกข้อมูลของนักศึกษาที่ได้รับทุนการศึกษาลงในระบบแล้วแสดงสถานะการคัดเลือกว่าผ่านการคัดเลือกทุนหรือไม่ 
             เพื่อเป็นข้อมูลในการโอนเงินให้กับนักศึกษาที่ผ่านการคัดเลือกต่อไป
            </p>
              <Grid item xs={12}>
                <Button
                  style={{ float: "right" }}
                  component={RouterLink}
                  to="/studentlist"
                  variant="contained"
                  color="primary"
                >
                  ระบบคัดเลือกนักศึกษา
                </Button>
              </Grid>
          </Box>   
        </Paper>
        <Paper>    
       <Box
          display="flex"
          sx={{
            marginTop: 2,
          }}
        >
          <Box sx={{ paddingX: 4 }}>        
               <h3>Requirements</h3>         
          </Box>
        </Box>
        <Divider />
        <Box sx={{ paddingX: 4, paddingY: 5.6 }}>          
            <p>
            ระบบการจัดการทุน เป็นระบบสำหรับผู้ดูแลระบบเพื่อที่จะนำทุนและข้อมูลของทุนต่างๆ ใส่เข้ามาในระบบ 
            จะมีการแยกประเภทของทุนต่างๆ เช่น ทุนภายในประเทศ  ทุนต่างประเทศ หรือ ทุนให้เปล่า เป็นต้น และมีการแสดงสถานะทุน 
            ข้อมูลของทุนพอสังเขปเพื่อให้ นักศึกษาอ่านข้อมูลคร่าวๆก่อนที่จะเข้าไปดูข้อมูลของทุนทั้งหมด 
            นอกจากนี้นักศึกษายังสามารถคลิกเข้าไปดูรายละเอียดของทุนแบบเต็มๆได้ด้วย
            </p>
              <Grid item xs={12}>
                <Button
                  style={{ float: "right" }}
                  component={RouterLink}
                  to="/sholarship"
                  variant="contained"
                  color="primary"
                >
                  ระบบการจัดการทุน
                </Button>
              </Grid>
          </Box>   
        </Paper>
        <Paper>    
       <Box
          display="flex"
          sx={{
            marginTop: 2,
          }}
        >
          <Box sx={{ paddingX: 4 }}>        
               <h3>Requirements</h3>         
          </Box>
        </Box>
        <Divider />
        <Box sx={{ paddingX: 4, paddingY: 5.6 }}>          
            <p>
            ระบบทุนการศึกษา เป็นระบบที่ผู้ใช้ระบบเป็นสมาชิกสามารถ login 
            เข้าระบบเพื่อดูข้อมูลที่เกี่ยวกับทุนการศึกษาแต่ละประเภท โดยนักศึกษาสามารถเข้ามาเลือกทุนที่ต้องการและยื่นคำร้องขอทุนเข้ามา 
            เพื่อรับการคัดเลือกทุนการศึกษาตามเงื่อนไขทุนแต่ละประเภท ทางระบบจะทำการคัดเลือกนักศึกษาที่ได้รับทุน 
            แล้วทำการโอนเงินให้นักศึกษาที่ได้รับทุน โดยจะมีการเก็บหลักฐานการโอนเงินไว้ภายในระบบ รวมทั้งยังมีข้อมูลของผู้ให้ทุนการศึกษาแต่ละทุนอีกด้วย
            </p>
            <p>
            ระบบผู้ให้ทุนเป็นระบบที่จัดทำขึ้นมาเพื่อรวบรวมข้อมูลของผู้ให้ทุนหรือสังกัดองค์กรที่ต้องการบริจาคทุนโดยระบบนี้จะมีการรวบรวมเงินทุน
            ที่ได้รับจากการบริจาคเพื่อเก็บไว้เป็นทุนในการมอบให้นักศึกษาที่ขาดแคลนทุนทรัพย์
            </p>
              <Grid item xs={12}>
                <Button
                  style={{ float: "right" }}
                  component={RouterLink}
                  to="/sholarship"
                  variant="contained"
                  color="primary"
                >
                  ระบบผู้ให้ทุน
                </Button>
              </Grid>
          </Box>   
        </Paper>
        <Paper>    
       <Box
          display="flex"
          sx={{
            marginTop: 2,
          }}
        >
          <Box sx={{ paddingX: 4 }}>        
               <h3>Requirements</h3>         
          </Box>
        </Box>
        <Divider />
        <Box sx={{ paddingX: 4, paddingY: 5.6 }}>          
            <p>
              ระบบทุนการศึกษาเป็น ระบบสำหรับนักศึกษาผู้ประสงค์ขอรับทุนการศึกษาทางนักศึกษาที่ login เข้ามาเป็น User ในระบบสามารถเลือกหาทุนการศึกษาที่ทางสนใจและคุณสมบัติตรงกับการรับทุนนั้น โดยมีรายละเอียดเงื่อนไขการรับทุนให้นักศึกษาได้ทราบซึ่งหากประสงค์
              สามารถส่งคำร้องขอรับทุนการศึกษา
            </p>  
            <p>
              นอกจากนี้ทาง ผู้ดูแลระบบที่ login เข้ามาเป็น Admin สามารถตรวจสอบบันทึกรายการโอนเงินทุนการศึกษาของตัวนักศึกษาที่ถูกคัดเลือก
              ได้ผ่านทางระบบทุนการศึกษามหาวิทยาลัย โดยเมื่อขั้นตอนทำธุรกรรมการเงินผ่านทางธนาคารจนเงินทุนโอนเข้าสู่บัญชีนักศึกษาที่ถูกคัดเลือก
              แล้วทางระบบจะมีการบันทึกยอดการโอนเงิน เข้าสู่รายการโอนเงินทุนการศึกษาเพื่อตรวจสอบย้อนหลัง
            </p>
              <Grid item xs={12}>
                <Button
                  style={{ float: "right" }}
                  component={RouterLink}
                  to="/sliplist"
                  variant="contained"
                  color="primary"
                >
                  ระบบบันทึกข้อมูลธุรกรรมการเงินทุนการศึกษา
                </Button>
              </Grid>
          </Box>   
        </Paper>
        </Container>
    </div>
  )
}

export default HomeAdmin


