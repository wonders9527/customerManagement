package com.jinhuifeng.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class LoginFilter implements Filter {

    @Override
    public void destroy() {

    }

    @Override
    public void doFilter(ServletRequest arg0, ServletResponse arg1, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest)arg0;
        HttpServletResponse response = (HttpServletResponse)arg1;
        HttpSession session = request.getSession();

        //获得用户请求的URI
        String path = request.getRequestURI();

//        System.out.println("***********************");
//        System.out.println(path);


        if(path.indexOf("/qcom.html") > -1||path.indexOf("/qper.html") > -1||path.indexOf("/index.html") > -1||path.indexOf("/login.html") > -1||path.contains(".css")||path.contains(".js")||path.contains(".jpg")||path.contains(".png")){
            chain.doFilter(request, response);
            return;
        }

        if(path.indexOf("login")!=-1||path.indexOf("user")!=-1){
            chain.doFilter(request, response);
            return;
        }

        // 登陆页面无需过滤
        if(session.getAttribute("user_session") == null){
            response.sendRedirect(request.getContextPath() + "/login.html");
        }else{
            chain.doFilter(request, response);
        }
    }

    @Override
    public void init(FilterConfig arg0) throws ServletException {
        // TODO Auto-generated method stub

    }

}
