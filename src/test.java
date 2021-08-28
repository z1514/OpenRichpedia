import java.io.BufferedReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.lang.model.util.ElementScanner6;

import jdk.internal.org.jline.utils.InputStreamReader;

class Test
{
    public static void main(String[] args) {
        try{
        int[] m = new int[2];
        m[8] = 5;
        }
        catch(IndexOutOfBoundsException e)
        {
            System.out.println(e);
        }

    }
}