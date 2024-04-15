import { resend } from "@/lib/Resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username : string,
    verifyCode:string ,
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
                from :'onboarding@resend.dev' , 
                to : email, 
                subject :'Verification code' , 
                react : VerificationEmail({username , otp : verifyCode}) , 
        });
        return {
            success :true  , 
            message : "Verification Email Sent Successfully"
        }
    } catch (emailError) {
        console.log("Error Sending Verification Email" ,emailError );
        return {
            success :false  , 
            message : "Error Sending Verification Email"
        }
    }
}