package de.sitevertreiber.cordova.NetworkInterfaces;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;
import android.app.Activity;
import android.os.Bundle;
import android.content.Context;
import android.net.*;
import android.net.wifi.WifiManager;
import android.text.format.Formatter;
import java.net.NetworkInterface;
import java.net.InterfaceAddress;
import java.util.Enumeration;



public class Network extends CordovaPlugin {

    @Override
    public boolean execute(String action, final JSONArray data, final CallbackContext callbackContext) throws JSONException {

        if (action.equals("list")) {

            cordova.getThreadPool().execute(new Runnable() {

                public void run() {

                    String message = "[";

                    Enumeration<NetworkInterface> nwis;
                    try {
                        nwis = NetworkInterface.getNetworkInterfaces();
                        while (nwis.hasMoreElements()) {

                            NetworkInterface ni = nwis.nextElement();
                            for (InterfaceAddress ia : ni.getInterfaceAddresses())

                                message = message + String.format("{\"id\": \"%s\", \"ip\": \"%s\", \"netmask\": \"%d\"},", ni.getDisplayName(), ia.getAddress(), ia.getNetworkPrefixLength());
                        }

                    } catch (Exception e) {
                        e.printStackTrace();
                    }

                    message = message + "{}]";

                    callbackContext.success(message);

                }

            });

        }

        return true;
    }

}