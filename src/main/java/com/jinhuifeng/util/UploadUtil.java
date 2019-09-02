package com.jinhuifeng.util;

import org.apache.commons.io.FilenameUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class UploadUtil {

    public static Map<String,Object> imageUpload(@RequestParam(value="file") MultipartFile file, HttpServletRequest req){
        Map<String,Object> resultMap = new HashMap<String, Object>();
        String path = req.getSession().getServletContext().getRealPath("images/");
        String ext = FilenameUtils.getExtension(file.getOriginalFilename());
        String newFileName = UUID.randomUUID().toString().replaceAll("-", "")+"."+ ext;
        // 写入文件成功之后，返回的数据，也就是数据库里要存的文件的url
        File targetFile= new File(path,newFileName);
        try {
            if(!targetFile.exists()){
                //写入文件
                file.transferTo(targetFile);
            }
            resultMap.put("status", "1");
            resultMap.put("content", newFileName);
            return resultMap;
        } catch (IllegalStateException e) {
            e.printStackTrace();
            resultMap.put("status", "0");
            resultMap.put("content", "图片上传失败！");
        } catch (IOException e) {
            e.printStackTrace();
            resultMap.put("status", "0");
            resultMap.put("content", "图片上传失败！");
        }
        //写入文件失败，则返回空字符串
        return resultMap;
    }
}
