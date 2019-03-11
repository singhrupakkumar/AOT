package com.aot;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.content.Intent;

import java.time.Instant;

public class SplashActivity extends AppCompatActivity {
    @Override

    protected  void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);

//        Intent intent= new Intent(this,MainActivity.class);
//
//        startActivity(intent);
//        finish();

        Thread background = new Thread() {
            public void run() {

                try {
                    // Thread will sleep for 3 seconds
                    sleep(3*1000);

                    Intent intent = new Intent(getBaseContext(), MainActivity.class);
                    startActivity(intent);
                    finish();

                } catch (Exception e) {

                }
            }
        };

        // start thread
        background.start();

    }
}
