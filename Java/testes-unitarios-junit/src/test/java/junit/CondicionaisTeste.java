package junit;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.condition.EnabledIfEnvironmentVariable;

public class CondicionaisTeste {

    @Test
    @EnabledIfEnvironmentVariable(named = "USER", matches = "Estevan")
    void validarAlgoSomenteNoUsuarioEstevan() {
        Assumptions.assumeTrue("Estevan Pithan".equals(System.getenv("USER")));
        Assertions.assertEquals(10, 5 + 5);
    }
}
