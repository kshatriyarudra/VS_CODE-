import java.util.*;

public class Main {
public class Student {
	// information
	// data members
	private String name;
	private int rollno;

	// what it can do with this information
	// functions/ methods

	public void setrollno(int rollno) {
		if (rollno < 0) {
			return;
		}

		this.rollno = rollno;
	}

	public void setname(String name) {
		this.name = name;
	}

	public int getrollno() {
		return this.rollno;
	}

	public String getname() {
		return this.name;
	}

}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
        Student s1;

		s1 = new Student();

		System.out.println(s1.getrollno() + " " + s1.getname());

		s1.setrollno(1);
		s1.setname("Akshima");
		System.out.println(s1.getrollno() + " " + s1.getname());
	}

}
