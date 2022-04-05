import java.util.*;

public class Main {
    public static class Conjugate {
        int real;
        int imag;

        void announceYourself(){
            System.out.println(this.real + "+i" + this.imag);
        }


    }

    public static Conjugate add(Conjugate s1 ,Conjugate s2) {
        Conjugate temp = new Conjugate();
        temp.real = s1.real + s2.real;
        temp.imag = s1.imag + s2.imag;
        System.out.println(temp.real+"+i"+temp.imag);
        return(temp);

    }

    // public static void swap(Student s1, Student s2){
    //     // s1 = new Student();
    //     // s2 = new Student();

    //     int tage = s1.age;
    //     s1.age = s2.age;
    //     s2.age = tage;

    //     s1 = new Student();

    //     String tname = s1.name;
    //     s1.name = s2.name;
    //     s2.name = tname;

    //     s2 = new Student();
    // }

    public static void main(String[] args){
        Conjugate s1;

        s1 = new Conjugate();
        s1.real = 10;
        s1.imag = 3;

        Conjugate s2 = new Conjugate();
        s2.real = 20;
        s2.imag = 7;


        s1.announceYourself();
        s2.announceYourself();
        add(s1,s2);
        // System.out.println();

        // swap(s1, s2);
        // s1.announceYourself();
        // s2.announceYourself();

        // Student s3 = s2;
        // s3.age = 30;
        // s3.name = "C";
        // s3.announceYourself();

        // s2.announceYourself();
    }
}