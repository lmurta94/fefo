package org.fefo;

public class Normaliser {

    public String normalise(String titleReceive) {
        return switch (titleReceive.toLowerCase()) {
            case "architect", "architect chief" -> "Architect";
            case "quantity surveyor","surveyor" -> "Surveyor";
            case "java engineer", "c# engineer" -> "Software engineer";
            case "chief accountant", "accountant" -> "Accountant";
            default -> "Stranger Title";

        };
    }




}