import org.fefo.Normaliser;
import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class NormaliserTest {

    @Test
    public void testNormalise() {
        Normaliser normaliser = new Normaliser();

        assertEquals("Software engineer", normaliser.normalise("Java engineer"));
        assertEquals("Software engineer", normaliser.normalise("C# engineer"));
        assertEquals("Accountant", normaliser.normalise("Chief Accountant"));
        assertEquals("Surveyor", normaliser.normalise("quantity surveyor"));
        assertEquals("Architect", normaliser.normalise("Architect Chief"));
        assertEquals("Stranger Title", normaliser.normalise("Player Soccer"));
    }
}
