import React from "react";

export default function Button({
  //children easy use in pass in return html
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  //doing sprad (jitni bhi properties di hai woh sari le li..)
  ...props
}) {
  return (
    //don't use backtiks without curly brackets because it's javascript syntax
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

/* forward ref => hm apna ek loggin form bna rhe hai apna,us loggin form me  input field alg hai, wahi same input field hm username me password me sb jgeh use krenge..or kahi or loggin page hai, lekin input field ki state ka access mujhe loggin page pr chahiye hoga na..to iski state ka reference mujhe dena pdega loggin page ke ander...esliye use hota hai forward reference...
in english
We have created a login form, the input field in our login form is different, we have the same input field as username and password. But there is another login page, but I need to have access to the state of the input field on the login page, so I have to give the reference of that state inside the login page. This is why forward reference is used...
 */
