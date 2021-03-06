package com.jinhuifeng.controller;

import com.jinhuifeng.model.UserTable;
import com.jinhuifeng.service.UserService;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    UserTable userTable=new UserTable();

    @ResponseBody
    @RequestMapping("/login")
    public UserTable login(@RequestParam("userName")String userName, @RequestParam("password")String password,
                           HttpSession session, HttpServletRequest request){

        UserTable user=userService.queryLogin(userName,password);

        if(user!=null && user.getWorkStatus().equals("1")){
            session.setAttribute("user_session", user);
            userTable.setUserName(user.getUserName());
            userTable.setUserType(user.getUserType());
            userTable.setWorkStatus(user.getWorkStatus());
            userTable.setEmployeeName(user.getEmployeeName());
        }else{
            userTable.setUserName(null);
            userTable.setUserType(null);
            userTable.setWorkStatus(null);
        }
        return userTable;
    }

    @ResponseBody
    @RequestMapping("/findAll")
    public List<UserTable> findAll(){
        List<UserTable> userList=userService.findAll();
        return  userList;
    }

    @ResponseBody
    @RequestMapping("/update")
    public String update(@RequestParam("employeeName")String employeeName,@RequestParam("employeeNumber")String employeeNumber,
                      @RequestParam("workStatus")String workStatus,@RequestParam("userName")String userName,
                      @RequestParam("userType")String userType,@RequestParam("id")int id,
                      HttpSession session){
        userTable.setId(id);
        userTable.setEmployeeName(employeeName);
        userTable.setEmployeeNumber(employeeNumber);
        userTable.setWorkStatus(workStatus);
        userTable.setUserName(userName);
        userTable.setUserType(userType);
        int resultObj=userService.updateById(userTable);
        Map<String, Object> map = new HashMap<>();
        map.put("result", resultObj);
        return  JSONObject.fromObject(map).toString();
    }

    @ResponseBody
    @RequestMapping("/delete")
    public String delete(@RequestParam("id")int id,HttpSession session){
        int resultObj=userService.deleteById(id);
        Map<String, Object> map = new HashMap<>();
        map.put("result", resultObj);
        return  JSONObject.fromObject(map).toString();
    }

    @ResponseBody
    @RequestMapping("/saveAccount")
    public String saveAccount(@ModelAttribute UserTable userTable,HttpSession session){
        int resultObj=userService.saveAccount(userTable);
        Map<String, Object> map = new HashMap<>();
        map.put("result", resultObj);
        return  JSONObject.fromObject(map).toString();
    }

    @RequestMapping("/loginOut")
    public String loginOut(HttpSession session){
        //session.removeAttribute("user_session");
        session.invalidate();
        return  "redirect:/login.html";
    }

}
